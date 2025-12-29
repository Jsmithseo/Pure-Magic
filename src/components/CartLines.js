import React, { useEffect } from "react";
import { useCart } from "../../hooks/useCart";

export default function CartLines() {
  const { cart, refreshCart, removeLine, loading } = useCart();

  useEffect(() => {
    refreshCart().catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const lines = cart?.lines?.edges?.map((e) => e.node) || [];

  if (!lines.length) return <p style={{ opacity: 0.8 }}>Cart is empty.</p>;

  return (
    <div style={{ marginTop: 16, display: "grid", gap: 12 }}>
      {lines.map((line) => (
        <div
          key={line.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            border: "1px solid #eee",
            borderRadius: 12,
            padding: 12,
          }}
        >
          <div>
            <div style={{ fontWeight: 800 }}>
              {line?.merchandise?.product?.title}
            </div>
            <div style={{ opacity: 0.8, fontSize: 14 }}>
              Qty: {line.quantity}
            </div>
          </div>

          <button
            onClick={() => removeLine(line.id)}   // ✅ line.id from your GET response
            disabled={loading}
            style={{
              border: "none",
              background: "transparent",
              textDecoration: "underline",
              fontWeight: 800,
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.6 : 1,
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
