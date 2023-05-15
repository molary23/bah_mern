import "../styles/style.css";
import type { AppProps } from "next/app";
import Home from "../components/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Home>
        <Component {...pageProps} />
      </Home>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}
