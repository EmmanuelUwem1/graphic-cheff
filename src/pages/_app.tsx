import React from "react";
import { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../globals.css";
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      {" "}
      <Component {...pageProps} />{" "}
    </Layout>
  );
};
export default MyApp;
