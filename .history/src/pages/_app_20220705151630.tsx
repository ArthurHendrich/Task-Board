import { AppProps } from "next/app";
import { Header } from "../components/Header";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import "../styles/global.scss";

import { SessionProvider as NextAuthProvider } from "next-auth/react";

const initialOptions = {
  'client-id': 'AWRtC8I6HSKs-3UAVscjBm_nIr8Z34tThwaFLaYBNgRLOjzw1agw78_5lPcmbzdY3-dDijbb4pY7LuCy',
  currency: 'BRL',
  intent: 'capture'
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <PayPalScriptProvider options={initialOptions}>
        <Header />
        <Component {...pageProps} />
      </PayPalScriptProvider>
    </NextAuthProvider>
  );
}

export default MyApp;
