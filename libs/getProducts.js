import { shopifyFetch } from "./shopify";

const PRODUCTS_QUERY = `
  query Products($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          title
          handle
          availableForSale
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

export async function getProducts(first = 11) {
  const data = await shopifyFetch(PRODUCTS_QUERY, { first });
  return data.products.edges.map((e) => e.node);
}
