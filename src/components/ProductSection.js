import React, { useMemo, useState } from "react";
import { useCart } from "../../hooks/useCart";
import { formatMoney } from "../../libs/money"; 

export default function ProductsSection({ products = [] }) {
  const { cart, loading, addToCart, checkout, clearLocalCart } = useCart();
  const [loadingById, setLoadingById] = useState({});
  const [showAll, setShowAll] = useState(false);

  const handleAdd = async (p) => {
    const productId = p.id;
    const variantId = p?.variants?.edges?.[0]?.node?.id;
    if (!variantId) return alert("No purchasable variant.");

    try {
      setLoadingById((prev) => ({ ...prev, [productId]: true }));
      await addToCart(variantId, 1);
    } catch (e) {
      alert(e.message);
    } finally {
      setLoadingById((prev) => ({ ...prev, [productId]: false }));
    }
  };

  const handleResetCart = () => {
    const ok = window.confirm("Reset cart? This will remove all items from your current cart.");
    if (!ok) return;

    clearLocalCart();
    setShowAll(false);
    setLoadingById({});
  };

  const reversedProducts = useMemo(() => [...products].reverse(), [products]);

  const visibleProducts = useMemo(() => {
    return showAll ? reversedProducts : reversedProducts.slice(0, 6);
  }, [reversedProducts, showAll]);

  const canLoadMore = reversedProducts.length > 5;

  // ✅ sticky bar values
  const itemCount = cart?.totalQuantity || 0;
  const totalLabel = cart?.cost?.totalAmount?.amount
    ? `${cart.cost.totalAmount.amount} ${cart.cost.totalAmount.currencyCode || ""}`
    : "";

  return (
    <section style={{ padding: 24, paddingBottom: itemCount ? 110 : 24 }}>
      {/* Header row with Checkout + Reset */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <h2 style={{ margin: 0 }}>Products</h2>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <button
            onClick={handleResetCart}
            disabled={loading}
            style={{
              padding: "10px 14px",
              borderRadius: 10,
              border: "1px solid #ddd",
              background: "#fff",
              color: "#000",
              fontWeight: 800,
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.6 : 1,
            }}
          >
            Reset Cart
          </button>

          <button
            onClick={checkout}
            disabled={!itemCount || loading}
            style={{
              padding: "10px 14px",
              borderRadius: 10,
              border: "none",
              background: "#000",
              color: "#fff",
              fontWeight: 800,
              cursor: !itemCount || loading ? "not-allowed" : "pointer",
              opacity: !itemCount || loading ? 0.6 : 1,
            }}
          >
            Checkout {itemCount ? `(${itemCount})` : ""}
          </button>
        </div>
      </div>

      {/* Products grid */}
      <div
        style={{
          marginTop: 16,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
        }}
      >
        {visibleProducts.map((p) => {
          const isLoading = !!loadingById[p.id];

          return (
            <div
              className="product"
              key={p.id}
              style={{ border: "1px solid #eee", borderRadius: 12, padding: 12 }}
            >
              {p.featuredImage?.url && (
                <img
                  src={p.featuredImage.url}
                  alt={p.featuredImage.altText || p.title}
                  style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 10 }}
                />
              )}

              <h6 style={{ marginTop: 10 }}>{p.title}</h6>
              <p style={{ opacity: 0.8 }}>
  {formatMoney(
    p.priceRange.minVariantPrice.amount,
    p.priceRange.minVariantPrice.currencyCode
  )}
</p>

              <button
                onClick={() => handleAdd(p)}
                disabled={isLoading}
                style={{
                  width: "100%",
                  marginTop: 12,
                  padding: "10px 12px",
                  borderRadius: 10,
                  border: "none",
                  background: "#000",
                  color: "#fff",
                  fontWeight: 700,
                  cursor: isLoading ? "not-allowed" : "pointer",
                  opacity: isLoading ? 0.8 : 1,
                }}
              >
                {isLoading ? "Adding…" : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>

      {/* Load More / Show Less UNDER the grid */}
      {canLoadMore ? (
        <div style={{ marginTop: 16, display: "flex", justifyContent: "center" }}>
          <button
            onClick={() => setShowAll((v) => !v)}
            style={{
              padding: "10px 18px",
              borderRadius: 10,
              border: "1px solid #ddd",
              background: "#fff",
              fontWeight: 800,
              cursor: "pointer",
            }}
          >
            {showAll ? "Show Less" : "Load More"}
          </button>
        </div>
      ) : null}

      {canLoadMore ? (
        <div style={{ marginTop: 10, opacity: 0.75, fontSize: 14, textAlign: "center" }}>
          Showing {visibleProducts.length} of {reversedProducts.length}
        </div>
      ) : null}

      {/* ✅ Sticky Checkout Bar */}
      {itemCount > 0 ? (
        <div
          role="region"
          aria-label="Sticky checkout"
          style={{
            position: "fixed",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            background: "rgba(255,255,255,0.98)",
            borderTop: "1px solid rgba(0,0,0,0.10)",
            boxShadow: "0 -10px 30px rgba(0,0,0,0.12)",
            padding: "12px 14px",
          }}
        >
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
              <div style={{ fontWeight: 900, fontSize: 15 }}>
                {itemCount} item{itemCount > 1 ? "s" : ""} in cart
              </div>
              {totalLabel ? <div style={{ fontSize: 14, opacity: 0.8 }}>{totalLabel}</div> : null}
            </div>

            <button
              onClick={checkout}
              disabled={loading}
              style={{
                padding: "12px 16px",
                borderRadius: 12,
                border: "none",
                background: "#000",
                color: "#fff",
                fontWeight: 900,
                cursor: loading ? "not-allowed" : "pointer",
                opacity: loading ? 0.7 : 1,
                minWidth: 140,
              }}
            >
              {loading ? "Loading…" : "Checkout"}
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
