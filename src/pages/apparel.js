// pages/apparel.js
import React, { useCallback, useMemo, useState } from "react";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";
import { Container, Row, Col } from "reactstrap";
import { shopifyFetch } from "../../libs/shopify";
import { useCart } from "../../hooks/useCart";
import { formatMoney } from "../../libs/money";

const APPAREL_COLLECTION_HANDLE = "apparel"; // ✅ Shopify collection handle (usually lowercase)

const PRODUCTS_QUERY = `
  query Products($handle: String!, $first: Int!) {
    collection(handle: $handle) {
      title
      description
      products(first: $first) {
        edges {
          node {
            id
            title
            handle
            featuredImage { url altText }
            priceRange { minVariantPrice { amount currencyCode } }
            variants(first: 1) { edges { node { id } } }
          }
        }
      }
    }
  }
`;

export async function getServerSideProps() {
  const data = await shopifyFetch(PRODUCTS_QUERY, {
    handle: APPAREL_COLLECTION_HANDLE,
    first: 50,
  });

  const collection = data?.collection || null;
  const products = collection?.products?.edges?.map((e) => e.node) || [];

  return {
    props: {
      collectionTitle: collection?.title || "Apparel",
      collectionDescription: collection?.description || "",
      products,
    },
  };
}

/* ----------------------------- Small UI pieces ---------------------------- */

function Toast({ message }) {
  if (!message) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 18,
        left: "50%",
        transform: "translateX(-50%)",
        background: "#111",
        color: "#fff",
        padding: "10px 14px",
        borderRadius: 999,
        fontWeight: 900,
        zIndex: 9999,
        boxShadow: "0 12px 30px rgba(0,0,0,.20)",
      }}
    >
      {message}
    </div>
  );
}

function StickyCheckoutBar({ itemCount, totalLabel, loading, onCheckout }) {
  if (!itemCount) return null;

  return (
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
          onClick={onCheckout}
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
  );
}

function ProductCard({ product, onAdd, disabled, busy }) {
  const imgUrl = product?.featuredImage?.url;

  return (
    <div style={{ border: "1px solid #eee", borderRadius: 14, padding: 12, background: "#fff" }}>
      <div
        style={{
          width: "100%",
          height: 260,
          borderRadius: 12,
          background: "#f6f6f6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {imgUrl ? (
          <img
            src={imgUrl}
            alt={product?.featuredImage?.altText || product.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain", // ✅ show entire product
              objectPosition: "center",
              padding: 8,
            }}
          />
        ) : null}
      </div>

      <div style={{ marginTop: 12, fontWeight: 800 }}>{product.title}</div>
      <div style={{ opacity: 0.75, marginTop: 2 }}>
        {formatMoney(product.priceRange.minVariantPrice.amount, product.priceRange.minVariantPrice.currencyCode)}
      </div>

      <button
        onClick={onAdd}
        disabled={disabled}
        style={{
          width: "100%",
          marginTop: 12,
          padding: "10px 12px",
          borderRadius: 12,
          border: "1px solid #111",
          background: "#111",
          color: "#fff",
          fontWeight: 900,
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.65 : 1,
        }}
      >
        {busy ? "Adding…" : "Add to Cart"}
      </button>
    </div>
  );
}

/* ------------------------------- Page Component --------------------------- */

export default function ApparelPage({
  products = [],
  collectionTitle = "Apparel",
  collectionDescription = "",
}) {
  const { cart, addToCart, checkout, clearLocalCart, loading } = useCart();

  const [busyId, setBusyId] = useState(null); // variantId
  const [toast, setToast] = useState("");

  const productList = useMemo(() => products || [], [products]);

  const itemCount = cart?.totalQuantity || 0;
  const totalLabel = cart?.cost?.totalAmount?.amount
    ? formatMoney(cart.cost.totalAmount.amount, cart.cost.totalAmount.currencyCode)
    : "";

  const showToast = useCallback((msg) => {
    setToast(msg);
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => setToast(""), 1600);
  }, []);

  const getVariantId = (p) => p?.variants?.edges?.[0]?.node?.id;

  const handleAdd = useCallback(
    async (product) => {
      const variantId = getVariantId(product);
      if (!variantId) return;

      try {
        setBusyId(variantId);
        await addToCart(variantId, 1);
        showToast("Added ✅");
      } catch (e) {
        alert(e?.message || "Failed to add item.");
      } finally {
        setBusyId(null);
      }
    },
    [addToCart, showToast]
  );

  const handleResetCart = useCallback(() => {
    const ok = window.confirm("Reset cart? This will remove all items from your current cart.");
    if (!ok) return;

    clearLocalCart?.();
    showToast("Cart reset ✅");
  }, [clearLocalCart, showToast]);

  return (
    <>
      <MainNavBar />
      <Toast message={toast} />

      <Container style={{ paddingTop: 40, paddingBottom: itemCount ? 110 : 60 }}>
        <Row>
          <Col lg={12}>
            {/* Header row with Checkout + Reset (same checkout UX) */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: 12,
                flexWrap: "wrap",
                marginBottom: 14,
              }}
            >
              <div style={{ flex: 1, minWidth: 240 }}>
                <h1 style={{ fontWeight: 800, marginBottom: 8 }}>{collectionTitle}</h1>
                {collectionDescription ? (
                  <div style={{ opacity: 0.75, maxWidth: 820 }}>{collectionDescription}</div>
                ) : (
                  <div style={{ opacity: 0.75 }}>Pure Magic apparel—hoodies, tees, and more.</div>
                )}
              </div>

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
          </Col>

          <Col lg={12}>
            {productList.length === 0 ? (
              <div
                style={{
                  border: "1px solid #eee",
                  borderRadius: 14,
                  padding: 16,
                  background: "#fff",
                  opacity: 0.85,
                }}
              >
                No apparel products found. Confirm your Shopify collection handle is{" "}
                <strong>{APPAREL_COLLECTION_HANDLE}</strong>.
              </div>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: 16,
                }}
              >
                {productList.map((p) => {
                  const variantId = getVariantId(p);
                  const busy = busyId === variantId;
                  const disabled = loading || !variantId || busy;

                  return (
                    <ProductCard
                      key={p.id}
                      product={p}
                      onAdd={() => handleAdd(p)}
                      disabled={disabled}
                      busy={busy}
                    />
                  );
                })}
              </div>
            )}
          </Col>
        </Row>
      </Container>

      <StickyCheckoutBar
        itemCount={itemCount}
        totalLabel={totalLabel}
        loading={loading}
        onCheckout={checkout}
      />

      <Footer />
    </>
  );
}
