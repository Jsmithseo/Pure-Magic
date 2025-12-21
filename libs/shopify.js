export async function shopifyFetch(query, variables = {}) {
    const token = 'af850e887c30c4a601ac442b4de857f2';
    const domain = 'magic2u1.myshopify.com';
    const version = '2025-10'
  

    if (!domain || !token) {
      throw new Error("Missing SHOPIFY_STORE_DOMAIN or SHOPIFY_STOREFRONT_ACCESS_TOKEN");
    }
  
    const res = await fetch(`https://${domain}/api/${version}/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": token,
      },
      body: JSON.stringify({ query, variables }),
      cache: "no-store",
    });
  
    const json = await res.json();
    if (json.errors) {
      console.error(json.errors);
      throw new Error("Shopify Storefront API error");
    }
    return json.data;
  }
  