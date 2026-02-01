import React, { useEffect, useMemo, useRef, useState } from "react";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";
import { Container, Row, Col } from "reactstrap";
import { shopifyFetch } from "../../libs/shopify"; // adjust path if needed
import { useCart } from "../../hooks/useCart";

const BUNDLE_COLLECTION_HANDLE = "bundle-eligible"; // ✅ Shopify collection handle

const PRODUCTS_QUERY = `
  query Products($handle: String!, $first: Int!) {
    collection(handle: $handle) {
      title
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

const TIERS = [
  { id: "tier2", size: 2, label: "2 items", savings: "Bundle deal", code: "VAL2FOR25" },
  { id: "tier3", size: 3, label: "3 items", savings: "Bundle deal", code: "VAL3FOR40" },
  { id: "tier4", size: 4, label: "4 items", savings: "His & Hers", code: "VAL4FOR55" },
];

export async function getServerSideProps() {
  const data = await shopifyFetch(PRODUCTS_QUERY, {
    handle: BUNDLE_COLLECTION_HANDLE,
    first: 50,
  });

  const products = data?.collection?.products?.edges?.map((e) => e.node) || [];
  const collectionTitle = data?.collection?.title || "Build Your Bundle";

  return { props: { products, collectionTitle } };
}

const getLineTitle = (line) => {
  const productTitle = line?.merchandise?.product?.title || "";
  const variantTitle = line?.merchandise?.title || "";
  return variantTitle && variantTitle !== "Default Title"
    ? `${productTitle} — ${variantTitle}`
    : productTitle;
};

// ✅ Add ?discount=CODE (or &discount=CODE) to checkout URL
const addDiscountParam = (url, code) => {
  if (!url || !code) return url;
  const joiner = url.includes("?") ? "&" : "?";
  return `${url}${joiner}discount=${encodeURIComponent(code)}`;
};

export default function BundlesPage({ products = [], collectionTitle = "Build Your Bundle" }) {
  const { cart, addToCart, removeFromCart, applyDiscountCode, checkout, loading, clearLocalCart } = useCart();

  const [tier, setTier] = useState(TIERS[0]);
  const [busyId, setBusyId] = useState(null); // variantId or lineId
  const [toast, setToast] = useState("");

  const sidebarRef = useRef(null);

  // cart lines normalized
  const lines = useMemo(() => {
    const edges = cart?.lines?.edges || [];
    return edges.map((e) => e.node);
  }, [cart]);

  const itemsAdded = cart?.totalQuantity || 0;
  const canAddMore = itemsAdded < tier.size;

  // ✅ Apply discount only when bundle is COMPLETE
  useEffect(() => {
    if (!tier?.code) return;
    if (itemsAdded < tier.size) return;
    applyDiscountCode([tier.code]).catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemsAdded, tier?.code, tier.size]);

  const showToast = (msg) => {
    setToast(msg);
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => setToast(""), 1600);
  };

  const handleAdd = async (p) => {
    const variantId = p?.variants?.edges?.[0]?.node?.id;
    if (!variantId) return;

    // ✅ allow duplicates, but respect tier size
    if (!canAddMore) {
      alert(`Bundle is full. You selected ${tier.size} items. Remove one to add a new item.`);
      return;
    }

    try {
      setBusyId(variantId);
      await addToCart(variantId, 1);
      showToast("Added to bundle ✅");
      sidebarRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (e) {
      alert(e?.message || "Failed to add item.");
    } finally {
      setBusyId(null);
    }
  };

  const handleRemove = async (lineId) => {
    try {
      setBusyId(lineId);
      await removeFromCart(lineId);
      showToast("Removed ✅");
    } catch (e) {
      alert(e?.message || "Failed to remove item.");
    } finally {
      setBusyId(null);
    }
  };

  // ✅ Checkout WITH discount param so it shows applied on checkout page
  const handleCheckout = async () => {
    if (itemsAdded < tier.size) return;

    try {
      // 1) ensure correct code is on cart
      let updatedCart = cart;
      if (tier?.code) {
        updatedCart = await applyDiscountCode([tier.code]);
      }

      // 2) redirect to checkout WITH discount param
      const checkoutUrl = updatedCart?.checkoutUrl || cart?.checkoutUrl;
      if (checkoutUrl) {
        window.location.href = addDiscountParam(checkoutUrl, tier?.code);
        return;
      }

      // fallback to existing checkout handler
      await checkout();
    } catch (e) {
      alert(e?.message || "Checkout failed.");
    }
  };

  const handleReset = () => {
    const ok = window.confirm("Reset your bundle? This clears your cart session.");
    if (!ok) return;
    clearLocalCart?.();
    showToast("Bundle reset ✅");
  };

  return (
    <>
      <MainNavBar />

      {/* Toast */}
      {toast ? (
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
          {toast}
        </div>
      ) : null}

      <Container style={{ paddingTop: 40, paddingBottom: 60 }}>
        <Row>
          {/* ✅ Sticky Sidebar FIRST on mobile, SECOND on desktop */}
          <Col lg={4} className="order-1 order-lg-2">
            <div ref={sidebarRef} className="bundleSidebar">
              <h2 style={{ fontWeight: 900, marginBottom: 6 }}>Build Your Bundle—Save Today!</h2>
              <p style={{ opacity: 0.75, marginTop: 0 }}>
                Pick a bundle size, add items, then checkout.
              </p>

              {/* Tier selector */}
              <div style={{ display: "grid", gap: 10, marginTop: 12 }}>
                {TIERS.map((t) => {
                  const active = t.size === tier.size;
                  const tierTooSmall = itemsAdded > t.size;

                  return (
                    <button
                      key={t.id}
                      onClick={() => {
                        if (tierTooSmall) return;
                        setTier(t);
                      }}
                      disabled={tierTooSmall}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        textAlign: "left",
                        padding: "12px 12px",
                        borderRadius: 12,
                        border: active ? "2px solid #111" : "1px solid #ddd",
                        background: tierTooSmall ? "#f6f6f6" : "#fff",
                        cursor: tierTooSmall ? "not-allowed" : "pointer",
                        fontWeight: 800,
                        opacity: tierTooSmall ? 0.65 : 1,
                      }}
                      title={tierTooSmall ? "Remove items before selecting a smaller tier" : ""}
                    >
                      <div>
                        <div>{t.label}</div>
                        <div style={{ fontSize: 13, opacity: 0.7 }}>{t.savings}</div>
                      </div>
                      <div
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: 999,
                          border: active ? "6px solid #111" : "2px solid #aaa",
                        }}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Slots */}
              <div style={{ marginTop: 16 }}>
                <div style={{ fontWeight: 900, fontSize: 18 }}>
                  {itemsAdded}/{tier.size} Items Added
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${tier.size}, 1fr)`,
                    gap: 10,
                    marginTop: 10,
                  }}
                >
                  {Array.from({ length: tier.size }).map((_, idx) => {
                    const line = lines[idx];
                    return (
                      <div
                        key={idx}
                        style={{
                          border: "2px dashed #cfcfcf",
                          borderRadius: 12,
                          minHeight: 64,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative",
                          overflow: "hidden",
                          background: "#fafafa",
                        }}
                      >
                        {line ? (
                          <>
                            <img
                              src={line.merchandise.product.featuredImage?.url}
                              alt={line.merchandise.product.title}
                              style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                            <button
                              onClick={() => handleRemove(line.id)}
                              disabled={busyId === line.id}
                              style={{
                                position: "absolute",
                                top: 6,
                                right: 6,
                                width: 28,
                                height: 28,
                                borderRadius: 999,
                                border: "none",
                                background: "rgba(0,0,0,.75)",
                                color: "#fff",
                                fontWeight: 900,
                                cursor: "pointer",
                                opacity: busyId === line.id ? 0.7 : 1,
                              }}
                              aria-label="Remove item"
                              title="Remove"
                            >
                              ×
                            </button>
                          </>
                        ) : (
                          <div style={{ fontSize: 28, opacity: 0.35, fontWeight: 700 }}>+</div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Selected items list */}
                <div style={{ marginTop: 14 }}>
                  {lines.length ? (
                    <div style={{ display: "grid", gap: 10 }}>
                      {lines.slice(0, tier.size).map((line) => (
                        <div
                          key={line.id}
                          style={{
                            display: "flex",
                            gap: 10,
                            alignItems: "center",
                            border: "1px solid #eee",
                            borderRadius: 12,
                            padding: 10,
                            background: "#fff",
                          }}
                        >
                          <img
                            src={line.merchandise.product.featuredImage?.url}
                            alt={line.merchandise.product.title}
                            style={{
                              width: 48,
                              height: 48,
                              borderRadius: 10,
                              objectFit: "cover",
                              background: "#f3f3f3",
                            }}
                          />
                          <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: 900, fontSize: 14 }}>{getLineTitle(line)}</div>
                            {typeof line?.quantity === "number" && line.quantity > 1 ? (
                              <div style={{ fontSize: 13, opacity: 0.7 }}>Qty: {line.quantity}</div>
                            ) : null}
                          </div>
                          <button
                            onClick={() => handleRemove(line.id)}
                            disabled={busyId === line.id}
                            style={{
                              border: "1px solid #111",
                              background: "#fff",
                              borderRadius: 10,
                              padding: "8px 10px",
                              fontWeight: 900,
                              cursor: "pointer",
                              opacity: busyId === line.id ? 0.7 : 1,
                            }}
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div style={{ opacity: 0.7, fontSize: 14 }}>Add items to start your bundle.</div>
                  )}
                </div>

                {/* Checkout */}
                <button
                  onClick={handleCheckout}
                  disabled={loading || itemsAdded < tier.size}
                  style={{
                    width: "100%",
                    marginTop: 14,
                    padding: "14px 14px",
                    borderRadius: 14,
                    border: "none",
                    background: itemsAdded < tier.size ? "#cfcfcf" : "#111",
                    color: "#fff",
                    fontWeight: 900,
                    cursor: itemsAdded < tier.size ? "not-allowed" : "pointer",
                  }}
                >
                  {itemsAdded < tier.size ? "Select more items" : `Checkout (${itemsAdded})`}
                </button>

                <button
                  onClick={handleReset}
                  disabled={loading}
                  style={{
                    width: "100%",
                    marginTop: 10,
                    padding: "12px 14px",
                    borderRadius: 14,
                    border: "1px solid #111",
                    background: "#fff",
                    fontWeight: 900,
                    cursor: "pointer",
                    opacity: loading ? 0.7 : 1,
                  }}
                >
                  Reset Bundle
                </button>

                <div style={{ marginTop: 10, fontSize: 13, opacity: 0.75 }}>
                  Promo applies at completion: <strong>{tier.code}</strong>
                </div>
              </div>

              {/* ✅ Sticky only on desktop */}
              <style jsx>{`
                .bundleSidebar {
                  border: 1px solid #eee;
                  border-radius: 16px;
                  padding: 16px;
                  background: #fff;
                  position: static;
                  margin-bottom: 18px;
                }
                @media (min-width: 992px) {
                  .bundleSidebar {
                    position: sticky;
                    top: 18px;
                    margin-bottom: 0px;
                  }
                }
              `}</style>
            </div>
          </Col>

          {/* ✅ Product Grid SECOND on mobile, FIRST on desktop */}
          <Col lg={8} className="order-2 order-lg-1">
            <h1 style={{ fontWeight: 800, marginBottom: 8 }}>{collectionTitle}</h1>
            <div style={{ opacity: 0.75, marginBottom: 18 }}>
              Choose a tier, add items, and checkout. Promo will apply when your bundle is complete.
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 16,
              }}
            >
              {products.map((p) => {
                const variantId = p?.variants?.edges?.[0]?.node?.id;

                const disabled = loading || !variantId || !canAddMore || busyId === variantId;

                return (
                  <div
                    key={p.id}
                    style={{
                      border: "1px solid #eee",
                      borderRadius: 14,
                      padding: 12,
                      background: "#fff",
                    }}
                  >
                    {p.featuredImage?.url ? (
                      <img
                        src={p.featuredImage.url}
                        alt={p.featuredImage.altText || p.title}
                        style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 12 }}
                      />
                    ) : null}

                    <div style={{ marginTop: 12, fontWeight: 800 }}>{p.title}</div>
                    <div style={{ opacity: 0.75, marginTop: 2 }}>
                      ${Number(p.priceRange.minVariantPrice.amount).toFixed(2)}
                    </div>

                    <button
                      onClick={() => handleAdd(p)}
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
                      {busyId === variantId ? "Adding…" : canAddMore ? "Add" : "Bundle Full"}
                    </button>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>

      {/* Mobile sticky checkout bar */}
      <div className="bundleMobileBar" aria-label="Bundle checkout bar">
        <div style={{ fontWeight: 900 }}>
          {itemsAdded}/{tier.size} selected
        </div>

        <button
          onClick={handleCheckout}
          disabled={loading || itemsAdded < tier.size}
          style={{
            padding: "12px 14px",
            borderRadius: 12,
            border: "none",
            background: itemsAdded < tier.size ? "#cfcfcf" : "#111",
            color: "#fff",
            fontWeight: 900,
            cursor: itemsAdded < tier.size ? "not-allowed" : "pointer",
            minWidth: 160,
          }}
        >
          {itemsAdded < tier.size ? "Select more" : "Checkout"}
        </button>

        <style jsx>{`
          .bundleMobileBar {
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 12px 14px;
            display: none;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            background: rgba(255, 255, 255, 0.92);
            backdrop-filter: blur(10px);
            border-top: 1px solid #eee;
            z-index: 9999;
          }
          @media (max-width: 991px) {
            .bundleMobileBar {
              display: flex;
            }
            :global(body) {
              padding-bottom: 78px;
            }
          }
        `}</style>
      </div>

      <Footer />
    </>
  );
}
