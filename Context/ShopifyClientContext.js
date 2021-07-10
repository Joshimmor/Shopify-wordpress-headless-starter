import Client from 'shopify-buy';

// Initializing a client to return content in the store's primary language
 export const client = Client.buildClient({
  domain: process.env.STORE_FRONT_DOMAIN,
  storefrontAccessToken: process.env.ACCESS_TOKEN
});

client.product.fetchAll().then((products) => {
  // Do something with the products
  console.log(products);
});