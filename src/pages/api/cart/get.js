import { shopifyFetch } from "../../../../libs/shopify";

const CART_QUERY = `
  query Cart($cartId: ID!) {
    cart(id: $cartId) {
      id
      checkoutUrl
      totalQuantity
      cost {
        totalAmount { amount currencyCode }
      }
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
  }
`;

export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  try {
    const cartId = req.query.cartId;
    if (!cartId) return res.status(400).json({ error: "Missing cartId" });

    const data = await shopifyFetch(CART_QUERY, { cartId });
    return res.status(200).json({ cart: data.cart });
  } catch (e) {
    return res.status(500).json({ error: e.message || "Cart get failed" });
  }
}
