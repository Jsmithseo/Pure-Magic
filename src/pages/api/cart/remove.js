// pages/api/cart/remove.js
import { shopifyFetch } from "../../../../libs/shopify";

const CART_LINES_REMOVE = `
  mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        id
        checkoutUrl
        totalQuantity
        cost { totalAmount { amount currencyCode } }
        lines(first: 50) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  product {
                    title
                    featuredImage { url altText }
                  }
                  price { amount currencyCode }
                }
              }
            }
          }
        }
      }
      userErrors { field message }
    }
  }
`;

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { cartId, lineIds } = req.body || {};
    if (!cartId) return res.status(400).json({ error: "Missing cartId" });
    if (!Array.isArray(lineIds) || lineIds.length === 0) {
      return res.status(400).json({ error: "Missing lineIds" });
    }

    const data = await shopifyFetch(CART_LINES_REMOVE, { cartId, lineIds });

    const errors = data?.cartLinesRemove?.userErrors || [];
    if (errors.length) return res.status(400).json({ error: errors[0].message });

    return res.status(200).json({ cart: data.cartLinesRemove.cart });
  } catch (e) {
    return res.status(500).json({ error: e.message || "Remove failed" });
  }
}
