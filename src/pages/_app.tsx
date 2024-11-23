import React from "react";
import { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../globals.css";
import { AnimatePresence } from "framer-motion";
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AnimatePresence mode="wait">
    <Layout>
      {" "}
      <Component {...pageProps} />{" "}
    </Layout>

    </AnimatePresence>
  );
};
export default MyApp;
