import "../styles/style.css";
import type { AppProps } from "next/app";
import Home from "../components/Home";
const SITE_URL = "/assets/images/";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Home url={URL}>
      <Component {...pageProps} siteURL={SITE_URL} />
    </Home>
  );
}
