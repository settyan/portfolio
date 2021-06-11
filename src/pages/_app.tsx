import React from "react";
import "normalize.css";
import "@/styles/globals.css";
import { AppProps } from "next/dist/next-server/lib/router/router";

const MyApp = (props: AppProps): JSX.Element => {
  return <props.Component {...props.pageProps} />;
};

export default MyApp;
