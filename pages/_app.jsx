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
        <meta
          name="description"
          content="O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados."
        />
        <meta
          property="og:description"
          content="O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados."
        />
        <meta
          property="twitter:description"
          content="O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados."
        />
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
