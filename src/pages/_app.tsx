import React from "react";
import "normalize.css";
import "@/styles/globals.css";
import { AppProps } from "next/dist/next-server/lib/router/router";
import {getLayout} from "@/layouts/default-layout"

const MyApp = (props: AppProps): JSX.Element => {
  // @ts-ignore
  const getLayout = props.Component.getLayout || (children => children)
  
  return getLayout(<props.Component {...props.pageProps} />);
};

export default MyApp;
