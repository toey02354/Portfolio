import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import "../styles/home.styles.css";
import "../styles/typing.styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
