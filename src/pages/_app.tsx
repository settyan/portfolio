import React from "react";
import "normalize.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const MyApp = (props: AppProps): JSX.Element => {
  // @ts-ignore
  const getLayout = props.Component.getLayout || ((children) => children);

  return getLayout(<props.Component {...props.pageProps} />);
};

export default MyApp;
