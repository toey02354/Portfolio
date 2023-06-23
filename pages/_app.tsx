import "../styles/globals.css";
import type { AppProps } from "next/app";
import ThemeProvider from "../context/ThemeProvider";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
