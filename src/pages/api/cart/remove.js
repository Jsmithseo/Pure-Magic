import { shopifyFetch } from "../../../../libs/shopify";

const CART_LINES_REMOVE = `
mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
  cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
    cart {
      id
      checkoutUrl
      totalQuantity
      lines(first: 50) {
        edges {
          node {
            id
            quantity
            merchandise {
              ... on ProductVariant {
                id
                title
                product { title featuredImage { url altText } }
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
  try {
    const { cartId, lineId } = req.body || {};
    if (!cartId || !lineId) return res.status(400).json({ error: "Missing cartId or lineId" });

    const data = await shopifyFetch(CART_LINES_REMOVE, { cartId, lineIds: [lineId] });
    const payload = data?.cartLinesRemove;

    const err = payload?.userErrors?.[0]?.message;
    if (err) return res.status(400).json({ error: err });

    res.status(200).json({ cart: payload.cart });
  } catch (e) {
    res.status(500).json({ error: e.message || "Server error" });
  }
}
