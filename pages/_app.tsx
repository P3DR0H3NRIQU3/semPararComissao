import "@/styles/globals.css";
   import '../styles/inputs.css';
   import '../styles/texts.css';
   import '../styles/containers.css';
   import '../styles/buttons.css';
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
