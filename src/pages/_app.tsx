import React from "react"
import "normalize.css"
import "../styles/globals.css"

type Props = {
  Component: React.VFC;
  pageProps: JSX.IntrinsicAttributes;
}

const MyApp: React.VFC<Props> = ({ Component, pageProps }: Props) => {
  return <Component {...pageProps} />
}

export default MyApp