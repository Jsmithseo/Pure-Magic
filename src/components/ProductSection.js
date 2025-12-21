import React, { useState } from "react";

export default function ProductsSection({ products = [] }) {
  const [loadingById, setLoadingById] = useState({});

  const handleBuyNow = async (p) => {
    const productId = p?.id;

    const variantId = p?.variants?.edges?.[0]?.node?.id;

    const available =
      typeof p?.availableForSale === "boolean"
        ? p.availableForSale
        : !!p?.variants?.edges?.[0]?.node?.availableForSale;

    if (!available) {
      alert("This product is currently sold out.");
      return;
    }

    if (!variantId) {
      alert("This product has no purchasable variant.");
      return;
    }

    try {
      setLoadingById((prev) => ({ ...prev, [productId]: true }));

      const res = await fetch("/api/buy-now", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ variantId, quantity: 1 }),
      });

      const json = await res.json();

      if (!res.ok) {
        alert(json?.error || "Checkout failed");
        return;
      }

      if (!json?.checkoutUrl) {
        alert("Checkout URL missing from response.");
        return;
      }

      window.location.href = json.checkoutUrl;
    } catch (err) {
      alert(err?.message || "Network error");
    } finally {
      setLoadingById((prev) => ({ ...prev, [productId]: false }));
    }
  };

  return (
    <section style={{ padding: 24 }}>
      <h2>Products</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
        }}
      >
        {products.map((p) => {
          const productId = p.id;

          const available =
            typeof p?.availableForSale === "boolean"
              ? p.availableForSale
              : !!p?.variants?.edges?.[0]?.node?.availableForSale;

          const isLoading = !!loadingById[productId];

          return (
            <div
              key={productId}
              style={{ border: "1px solid #eee", borderRadius: 12, padding: 12 }}
            >
              {p.featuredImage?.url && (
                <img
                  src={p.featuredImage.url}
                  alt={p.featuredImage.altText || p.title}
                  style={{
                    width: "100%",
                    height: 180,
                    objectFit: "cover",
                    borderRadius: 10,
                  }}
                />
              )}

              <h3 style={{ marginTop: 10 }}>{p.title}</h3>

              <p style={{ opacity: 0.8 }}>
                {p.priceRange?.minVariantPrice?.amount}{" "}
                {p.priceRange?.minVariantPrice?.currencyCode}
              </p>

              {/* Buy Now button */}
              <button
                onClick={() => handleBuyNow(p)}
                disabled={!available || isLoading}
                style={{
                  width: "100%",
                  marginTop: 12,
                  padding: "10px 12px",
                  borderRadius: 10,
                  border: "none",
                  background: !available ? "#999" : "#000",
                  color: "#fff",
                  fontWeight: 700,
                  cursor: !available || isLoading ? "not-allowed" : "pointer",
                  opacity: isLoading ? 0.85 : 1,
                }}
              >
                {!available ? "Sold Out" : isLoading ? "Opening checkout…" : "Buy Now"}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
