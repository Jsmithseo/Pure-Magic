import { useEffect, useState } from "react";

const CART_ID_KEY = "pm_cart_id";

export function useCart() {
  const [cartId, setCartId] = useState(() => {
    // ✅ read once on client (prevents waiting for useEffect)
    if (typeof window === "undefined") return null;
    return localStorage.getItem(CART_ID_KEY);
  });

  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(false);

  const getEffectiveCartId = () => cartId || cart?.id || (typeof window !== "undefined" ? localStorage.getItem(CART_ID_KEY) : null);

  const refreshCart = async () => {
    const id = getEffectiveCartId();
    if (!id) return null;

    const res = await fetch(`/api/cart/get?cartId=${encodeURIComponent(id)}`);
    const json = await res.json();
    if (!res.ok) throw new Error(json.error || "Failed to fetch cart");

    setCart(json.cart);
    return json.cart;
  };

  // ✅ auto-load cart whenever cartId becomes available
  useEffect(() => {
    if (!cartId) return;
    refreshCart().catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartId]);

  const ensureCart = async () => {
    const existing = getEffectiveCartId();
    if (existing) return existing;

    setLoading(true);
    try {
      const res = await fetch("/api/cart/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed to create cart");

      localStorage.setItem(CART_ID_KEY, json.cart.id);
      setCartId(json.cart.id);
      setCart(json.cart);
      return json.cart.id;
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (variantId, quantity = 1) => {
    const id = await ensureCart();

    setLoading(true);
    try {
      const res = await fetch("/api/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartId: id, variantId, quantity }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed to add to cart");

      setCart(json.cart);
      return json.cart;
    } finally {
      setLoading(false);
    }
  };

  const removeLine = async (lineId) => {
    const id = getEffectiveCartId();
    if (!id) throw new Error("No cart yet");

    setLoading(true);
    try {
      const res = await fetch("/api/cart/remove", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartId: id, lineIds: [lineId] }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed to remove item");

      setCart(json.cart);
      return json.cart;
    } finally {
      setLoading(false);
    }
  };

  const checkout = async () => {
    const c = cart || (await refreshCart());
    if (c?.checkoutUrl) window.location.href = c.checkoutUrl;
  };

  return { cartId, cart, loading, ensureCart, addToCart, removeLine, refreshCart, checkout };
}
