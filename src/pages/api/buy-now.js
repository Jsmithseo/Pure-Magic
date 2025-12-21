import { shopifyFetch } from "../../../libs/shopify";

const CART_CREATE_MUTATION = `
  mutation CartCreate($lines: [CartLineInput!]!) {
    cartCreate(input: { lines: $lines }) {
      cart {
        id
        checkoutUrl
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { variantId, quantity = 1 } = req.body;

    if (!variantId) {
      return res.status(400).json({ error: "Missing variantId" });
    }

    const data = await shopifyFetch(CART_CREATE_MUTATION, {
      lines: [{ merchandiseId: variantId, quantity }],
    });

    const userErrors = data?.cartCreate?.userErrors || [];
    if (userErrors.length) {
      return res.status(400).json({ error: userErrors[0].message });
    }

    const checkoutUrl = data?.cartCreate?.cart?.checkoutUrl;
    if (!checkoutUrl) {
      return res.status(500).json({ error: "No checkoutUrl returned from Shopify" });
    }

    return res.status(200).json({ checkoutUrl });
  } catch (err) {
    return res.status(500).json({ error: err?.message || "Buy now failed" });
  }
}
