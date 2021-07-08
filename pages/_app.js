import '../styles/globals.css';
import Layout from "../Comps/Layout";
import WidthContextProvider from "../Context/WidthContext"

function MyApp({ Component, pageProps }) {
  return (
    <WidthContextProvider>
    <Layout  {...pageProps} >
        <Component {...pageProps} />
    </Layout>
    </WidthContextProvider>
    
  )
}

export default MyApp
