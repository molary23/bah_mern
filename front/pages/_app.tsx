import "../styles/style.css";
import type { AppProps } from "next/app";
import Home from "../components/Home";
import { SITE_CONSTANTS } from "../util/constants";
const SITE_URL = SITE_CONSTANTS.image;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Home url={URL}>
      <Component {...pageProps} siteURL={SITE_URL} />
    </Home>
  );
}
