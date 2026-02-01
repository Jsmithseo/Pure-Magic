import { shopifyFetch } from "../../../../libs/shopify";

const CART_DISCOUNT_CODES_UPDATE = `
mutation cartDiscountCodesUpdate($cartId: ID!, $discountCodes: [String!]!) {
  cartDiscountCodesUpdate(cartId: $cartId, discountCodes: $discountCodes) {
    cart {
      id
      checkoutUrl
      totalQuantity
      discountCodes { code applicable }
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
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { cartId, codes } = req.body || {};
    if (!cartId) return res.status(400).json({ error: "Missing cartId" });

    // codes can be: ["VAL2FOR25"] or [] (to clear)
    const discountCodes = Array.isArray(codes)
      ? codes.filter(Boolean).map((c) => String(c).trim()).filter(Boolean)
      : [];

    const data = await shopifyFetch(CART_DISCOUNT_CODES_UPDATE, { cartId, discountCodes });
    const payload = data?.cartDiscountCodesUpdate;

    const errors = payload?.userErrors || [];
    if (errors.length) {
      return res.status(400).json({
        error: errors.map((e) => e.message).join(" | "),
        userErrors: errors,
      });
    }

    return res.status(200).json({ cart: payload?.cart });
  } catch (e) {
    return res.status(500).json({ error: e?.message || "Server error" });
  }
}
