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
      const res = await fetch("/api/cart/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed to create cart");

      if (typeof window !== "undefined") {
        localStorage.setItem(CART_ID_KEY, json.cart.id);
      }
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

  const removeFromCart = async (lineId) => {
    if (!cartId) return;
    setLoading(true);
    try {
      const res = await fetch("/api/cart/remove", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartId, lineId }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed to remove item");
      setCart(json.cart);
      return json.cart;
    } finally {
      setLoading(false);
    }
  };

  const applyDiscountCode = async (codes = []) => {
    const id = await ensureCart();
    setLoading(true);
    try {
      const res = await fetch("/api/cart/discount", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartId: id, codes }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed to apply discount");
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

  // ✅ auto-load cart when cartId exists (bundle sidebar shows lines immediately)
  useEffect(() => {
    if (!cartId) return;
    refreshCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartId]);

  const clearLocalCart = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(CART_ID_KEY);
    }
    setCartId(null);
    setCart(null);
  };

  const checkout = async () => {
    const c = cart || (await refreshCart());
    if (c?.checkoutUrl) window.location.href = c.checkoutUrl;
  };

  return {
    cartId,
    cart,
    loading,
    ensureCart,
    addToCart,
    removeFromCart,
    applyDiscountCode,
    refreshCart,
    clearLocalCart,
    checkout,
  };
}
