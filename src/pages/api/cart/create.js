import { shopifyFetch } from "../../../../libs/shopify";

const CART_CREATE = `
  mutation CartCreate($lines: [CartLineInput!]) {
    cartCreate(input: { lines: $lines }) {
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
    const { lines = [] } = req.body || {};
    const data = await shopifyFetch(CART_CREATE, { lines });

    const errors = data?.cartCreate?.userErrors || [];
    if (errors.length) return res.status(400).json({ error: errors[0].message });

    return res.status(200).json({ cart: data.cartCreate.cart });
  } catch (e) {
    return res.status(500).json({ error: e.message || "Cart create failed" });
  }
}
