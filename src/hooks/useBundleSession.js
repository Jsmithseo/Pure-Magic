'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

const STORAGE_KEYS = {
  selected: 'pm_bundle_selected',
  cartId: 'pm_cart_id',
};

function safeJsonParse(raw, fallback) {
  try {
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function useBundleSession() {
  const [selected, setSelected] = useState([]);
  const [cartId, setCartId] = useState(null);

  // Load from sessionStorage on mount
  useEffect(() => {
    const initialSelected = safeJsonParse(sessionStorage.getItem(STORAGE_KEYS.selected), []);
    const initialCartId = sessionStorage.getItem(STORAGE_KEYS.cartId);

    setSelected(initialSelected);
    setCartId(initialCartId);
  }, []);

  // Persist selected
  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEYS.selected, JSON.stringify(selected));
  }, [selected]);

  // Persist cartId
  useEffect(() => {
    if (cartId) sessionStorage.setItem(STORAGE_KEYS.cartId, cartId);
    else sessionStorage.removeItem(STORAGE_KEYS.cartId);
  }, [cartId]);

  // Clear when tab/window exits (pagehide is most reliable)
  useEffect(() => {
    const onPageHide = () => {
      sessionStorage.removeItem(STORAGE_KEYS.selected);
      sessionStorage.removeItem(STORAGE_KEYS.cartId);
    };

    window.addEventListener('pagehide', onPageHide);
    return () => window.removeEventListener('pagehide', onPageHide);
  }, []);

  const addSelected = useCallback((item) => {
    setSelected((prev) => {
      if (prev.some((x) => x.variantId === item.variantId)) return prev;
      return [...prev, item];
    });
  }, []);

  const removeSelected = useCallback((variantId) => {
    setSelected((prev) => prev.filter((x) => x.variantId !== variantId));
  }, []);

  const clearSelected = useCallback(() => {
    setSelected([]);
  }, []);

  const tier = useMemo(() => selected.length, [selected.length]);

  return {
    selected,
    tier,
    cartId,
    setCartId,
    setSelected,
    addSelected,
    removeSelected,
    clearSelected,
  };
}
