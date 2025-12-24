import { shopifyFetch } from "../../../../libs/shopify";

const CART_LINES_ADD = `
  mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id
        checkoutUrl
        totalQuantity
      }
      userErrors { field message }
    }
  }
`;

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { cartId, variantId, quantity = 1 } = req.body || {};
    if (!cartId) return res.status(400).json({ error: "Missing cartId" });
    if (!variantId) return res.status(400).json({ error: "Missing variantId" });

    const data = await shopifyFetch(CART_LINES_ADD, {
      cartId,
      lines: [{ merchandiseId: variantId, quantity }],
    });

    const errors = data?.cartLinesAdd?.userErrors || [];
    if (errors.length) return res.status(400).json({ error: errors[0].message });

    return res.status(200).json({ cart: data.cartLinesAdd.cart });
  } catch (e) {
    return res.status(500).json({ error: e.message || "Cart add failed" });
  }
}
