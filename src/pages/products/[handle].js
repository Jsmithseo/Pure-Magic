// pages/products/[handle].js
import React, { useMemo, useState, useCallback } from "react";
import { Container, Row, Col } from "reactstrap";
import MainNavBar from "../../components/MainNavBar";
import Footer from "../../components/Footer";
import { shopifyFetch } from "../../../libs/shopify"; // adjust if needed
import { useCart } from "../../../hooks/useCart";
import { formatMoney } from "../../../libs/money";

const PRODUCT_QUERY = `
  query ProductByHandle($handle: String!) {
    product(handle: $handle) {
      id
      title
      description
      featuredImage { url altText }
      images(first: 10) { edges { node { url altText } } }
      variants(first: 50) {
        edges {
          node {
            id
            title
            availableForSale
            selectedOptions { name value }
            price { amount currencyCode }
          }
        }
      }
    }
  }
`;

export async function getServerSideProps(ctx) {
  const handle = ctx?.params?.handle;
  const data = await shopifyFetch(PRODUCT_QUERY, { handle });
  const product = data?.product || null;
  if (!product) return { notFound: true };
  return { props: { product } };
}

const norm = (s) => String(s || "").toLowerCase().trim();

const getVariantSize = (variant) => {
  // Prefer option named "Size"
  const opts = variant?.selectedOptions || [];
  const sizeOpt = opts.find((o) => norm(o.name) === "size");
  if (sizeOpt?.value) return sizeOpt.value;

  // Fallback: infer from title
  const t = norm(variant?.title);
  if (t.includes("2oz")) return "2oz";
  if (t.includes("4oz")) return "4oz";
  return variant?.title || "";
};

const pickDefaultVariantId = (variants) => {
  // prefer 2oz if available
  const v2 = variants.find((v) => norm(getVariantSize(v)).includes("2oz") && v.availableForSale);
  if (v2) return v2.id;
  const firstAvail = variants.find((v) => v.availableForSale);
  return (firstAvail || variants[0])?.id || null;
};

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

export default function ProductPage({ product }) {
  const { cart, addToCart, checkout, loading } = useCart();

  const variants = useMemo(() => (product?.variants?.edges || []).map((e) => e.node), [product]);

  const sizes = useMemo(() => {
    const map = new Map();
    variants.forEach((v) => {
      const s = getVariantSize(v);
      if (!s) return;
      map.set(norm(s), s);
    });

    const list = Array.from(map.values());
    list.sort((a, b) => {
      const A = norm(a);
      const B = norm(b);
      const score = (x) => (x.includes("2oz") ? 0 : x.includes("4oz") ? 1 : 2);
      return score(A) - score(B);
    });

    return list;
  }, [variants]);

  const [selectedVariantId, setSelectedVariantId] = useState(() => pickDefaultVariantId(variants));
  const [busy, setBusy] = useState(false);
  const [toast, setToast] = useState("");

  const itemCount = cart?.totalQuantity || 0;

  const selectedVariant = useMemo(
    () => variants.find((v) => v.id === selectedVariantId) || null,
    [variants, selectedVariantId]
  );

  const priceLabel = useMemo(() => {
    if (!selectedVariant?.price) return "";
    return formatMoney(selectedVariant.price.amount, selectedVariant.price.currencyCode);
  }, [selectedVariant]);

  const showToast = useCallback((msg) => {
    setToast(msg);
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => setToast(""), 1600);
  }, []);

  const selectSize = (sizeValue) => {
    const match = variants.find((v) => norm(getVariantSize(v)) === norm(sizeValue));
    if (match?.id) setSelectedVariantId(match.id);
  };

  const handleAdd = async () => {
    if (!selectedVariantId) return;
    try {
      setBusy(true);
      await addToCart(selectedVariantId, 1);
      showToast("Added ✅");
    } catch (e) {
      alert(e?.message || "Failed to add to cart.");
    } finally {
      setBusy(false);
    }
  };

  const mainImg = product?.featuredImage?.url;

  return (
    <>
      <MainNavBar />
      <Toast message={toast} />

      <Container style={{ paddingTop: 40, paddingBottom: itemCount ? 110 : 60 }}>
        <Row style={{ rowGap: 18 }}>
          <Col lg={6}>
            <div style={{ border: "1px solid #eee", borderRadius: 16, padding: 12, background: "#fff" }}>
              <div
                style={{
                  width: "100%",
                  height: 420,
                  borderRadius: 12,
                  background: "#f6f6f6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                {mainImg ? (
                  <img
                    src={mainImg}
                    alt={product?.featuredImage?.altText || product?.title}
                    style={{ width: "100%", height: "100%", objectFit: "contain", padding: 12 }}
                  />
                ) : null}
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div style={{ border: "1px solid #eee", borderRadius: 16, padding: 16, background: "#fff" }}>
              <h1 style={{ fontWeight: 900, marginBottom: 6 }}>{product.title}</h1>
              {priceLabel ? <div style={{ fontWeight: 900, fontSize: 18 }}>{priceLabel}</div> : null}

              {/* ✅ Size Toggle */}
              {sizes.length ? (
                <div style={{ marginTop: 14 }}>
                  <div style={{ fontWeight: 900, marginBottom: 8 }}>Size</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 10 }}>
                    {sizes.map((size) => {
                      const active = norm(getVariantSize(selectedVariant)) === norm(size);
                      const v = variants.find((x) => norm(getVariantSize(x)) === norm(size));
                      const disabled = !v?.availableForSale;

                      return (
                        <button
                          key={size}
                          onClick={() => selectSize(size)}
                          disabled={disabled}
                          style={{
                            padding: "12px 12px",
                            borderRadius: 12,
                            border: active ? "2px solid #111" : "1px solid #ddd",
                            background: disabled ? "#f6f6f6" : "#fff",
                            cursor: disabled ? "not-allowed" : "pointer",
                            fontWeight: 900,
                            opacity: disabled ? 0.6 : 1,
                            textAlign: "left",
                          }}
                        >
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span>{size}</span>
                            <span
                              style={{
                                width: 18,
                                height: 18,
                                borderRadius: 999,
                                border: active ? "6px solid #111" : "2px solid #aaa",
                              }}
                            />
                          </div>

                          {v?.price ? (
                            <div style={{ marginTop: 6, fontSize: 13, opacity: 0.75 }}>
                              {formatMoney(v.price.amount, v.price.currencyCode)}
                            </div>
                          ) : null}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : null}

              <button
                onClick={handleAdd}
                disabled={busy || loading || !selectedVariantId || !selectedVariant?.availableForSale}
                style={{
                  width: "100%",
                  marginTop: 14,
                  padding: "12px 14px",
                  borderRadius: 14,
                  border: "none",
                  background: "#111",
                  color: "#fff",
                  fontWeight: 900,
                  cursor: busy || loading ? "not-allowed" : "pointer",
                  opacity: busy || loading ? 0.7 : 1,
                }}
              >
                {busy ? "Adding…" : selectedVariant?.availableForSale ? "Add to Cart" : "Sold Out"}
              </button>

              {/* ✅ Shopify description */}
              {product?.description ? (
                <div style={{ marginTop: 14 }}>
                  <div style={{ fontWeight: 900, marginBottom: 6 }}>Description</div>
                  <div style={{ opacity: 0.85, lineHeight: 1.55, whiteSpace: "pre-line" }}>
                    {product.description}
                  </div>
                </div>
              ) : null}
            </div>
          </Col>
        </Row>
      </Container>

      {/* ✅ Sticky checkout bar */}
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
            <div style={{ fontWeight: 900, fontSize: 15 }}>
              {itemCount} item{itemCount > 1 ? "s" : ""} in cart
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

      <Footer />
    </>
  );
}
