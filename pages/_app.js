import '../styles/globals.css';
import Layout from "../Comps/Layout";
import WidthContextProvider from "../Context/WidthContext";
import ShopifyClientContextProvider from "../Context/ShopifyClientContext";
import CartContextProvider from '../Context/CartContext';

function MyApp({ Component, pageProps }) {
  return (
      <ShopifyClientContextProvider>
        <CartContextProvider>
            <WidthContextProvider>
              <Layout  {...pageProps} >
                  <Component {...pageProps} />
              </Layout>
            </WidthContextProvider>
          </CartContextProvider>
      </ShopifyClientContextProvider>

  )
}

export default MyApp
