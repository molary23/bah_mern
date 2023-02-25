import "../styles/style.css";
import type { AppProps } from "next/app";
import Home from "../components/Home";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Home>
      <Component {...pageProps} />
    </Home>
  );
}
