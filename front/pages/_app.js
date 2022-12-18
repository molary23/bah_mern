import Home from "../layouts/Home";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Home>
      <Component {...pageProps} />
    </Home>
  );
}

export default MyApp;
