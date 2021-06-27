import '../styles/globals.css';
import Layout from "../Comps/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout  {...pageProps} >
        <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
