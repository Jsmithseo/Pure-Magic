import React, { useMemo, useState } from "react";

export default function ProductsSection({ products = [] }) {
  const [loadingById, setLoadingById] = useState({});
  const [showAll, setShowAll] = useState(false);

  const handleBuyNow = async (p) => {
    const productId = p?.id;
    const variantId = p?.variants?.edges?.[0]?.node?.id;

    const available =
      typeof p?.availableForSale === "boolean"
        ? p.availableForSale
        : !!p?.variants?.edges?.[0]?.node?.availableForSale;

    if (!available) return alert("This product is currently sold out.");
    if (!variantId) return alert("This product has no purchasable variant.");

    try {
      setLoadingById((prev) => ({ ...prev, [productId]: true }));

      const res = await fetch("/api/buy-now", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ variantId, quantity: 1 }),
      });

      const json = await res.json();

      if (!res.ok) return alert(json?.error || "Checkout failed");
      if (!json?.checkoutUrl) return alert("Checkout URL missing from response.");

      window.location.href = json.checkoutUrl;
    } catch (err) {
      alert(err?.message || "Network error");
    } finally {
      setLoadingById((prev) => ({ ...prev, [productId]: false }));
    }
  };

  // Reverse order without mutating props
  const productsReversed = useMemo(() => [...products].reverse(), [products]);

  // Only show first 5 until user clicks "Load all"
  const visibleProducts = showAll ? productsReversed : productsReversed.slice(0, 5);

  const hasMore = productsReversed.length > 5 && !showAll;

  return (
    <section style={{ padding: 24 }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
        <h2 style={{ margin: 0 }}>Products</h2>

        {/* Optional: show count */}
        <p style={{ margin: 0, opacity: 0.7, fontSize: 14 }}>
          Showing {visibleProducts.length} of {productsReversed.length}
        </p>
      </div>

      <div
        style={{
          marginTop: 16,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
        }}
      >
        {visibleProducts.map((p) => {
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

              <h6 style={{ marginTop: 10 }}>{p.title}</h6>

              <p style={{ opacity: 0.8 }}>
                {p.priceRange?.minVariantPrice?.amount}{" "}
                {p.priceRange?.minVariantPrice?.currencyCode}
              </p>

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

      {/* Load all */}
      {hasMore && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: 18 }}>
          <button
            onClick={() => setShowAll(true)}
            style={{
              padding: "12px 16px",
              borderRadius: 12,
              border: "1px solid #ddd",
              background: "#fff",
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            Load all products
          </button>
        </div>
      )}
    </section>
  );
}
