
import { shopifyFetch } from "../../../../libs/shopify";

const PRODUCTS_QUERY = `
  query Products($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
          featuredImage { url altText }
          priceRange { minVariantPrice { amount currencyCode } }
        }
      }
    }
  }
`;

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const first = Number(searchParams.get("first") || 12);

  try {
    const data = await shopifyFetch(PRODUCTS_QUERY, { first });
    return Response.json({ products: data.products.edges.map(e => e.node) });
  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}
