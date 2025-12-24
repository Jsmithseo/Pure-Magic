import { useEffect, useState } from "react";

const CART_ID_KEY = "pm_cart_id";

export function useCart() {
  const [cartId, setCartId] = useState(null);
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem(CART_ID_KEY) : null;
    if (saved) setCartId(saved);
  }, []);

  const ensureCart = async () => {
    if (cartId) return cartId;

    setLoading(true);
    try {
      const res = await fetch("/api/cart/create", { method: "POST", headers: { "Content-Type": "application/json" } });
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

  const refreshCart = async () => {
    if (!cartId) return null;
    const res = await fetch(`/api/cart/get?cartId=${encodeURIComponent(cartId)}`);
    const json = await res.json();
    if (res.ok) setCart(json.cart);
    return json.cart;
  };

  const checkout = async () => {
    // ensure latest cart has checkoutUrl
    const c = cart || (await refreshCart());
    if (c?.checkoutUrl) window.location.href = c.checkoutUrl;
  };

  return { cartId, cart, loading, ensureCart, addToCart, refreshCart, checkout };
}
