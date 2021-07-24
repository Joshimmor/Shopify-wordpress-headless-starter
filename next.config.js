require('dotenv').config();

module.exports = {
  reactStrictMode: true,
  env:{
     ACCESS_TOKEN: process.env.ACCESS_TOKEN,
     STORE_FRONT_DOMAIN :process.env.STORE_FRONT_DOMAIN 
  },
  images: {
    domains: ['cdn.shopify.com'],
  }
};  
