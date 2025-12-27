import { shopifyFetch } from "./shopify";

const PRODUCTS_QUERY = `
  query Products($first: Int!) {
    products(first: $first, sortKey: UPDATED_AT, reverse: true) {
      edges {
        node {
          id
          title
          handle
          availableForSale
          publishedAt
          createdAt
          updatedAt
          featuredImage { url altText }
          priceRange { minVariantPrice { amount currencyCode } }
          variants(first: 1) {
            edges {
              node {
                id
                availableForSale
              }
            }
          }
        }
      }
    }
  }
`;

export async function getProducts(first = 50) {
  const data = await shopifyFetch(PRODUCTS_QUERY, { first }); // ✅ use the param
  return data.products.edges.map((e) => e.node);
}
