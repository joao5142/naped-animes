import Head from "next/head";
import "../styles/app.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Script from "next/script";
config.autoAddCss = false;

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          defer
          src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
