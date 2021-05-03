import React from "react"
import Head from 'next/head'

import {Mainvisual} from "@/components/mainvisual"

import styles from "@/styles/index.module.css"

const Index: React.VFC = () => {
  return <>
    <Head>
      <title>Sena Suzuki</title>
      <meta name="description" content="Frontend Engineer"/>
      <meta property="og:url" content="https://www.settyan.me" />
      <meta property="og:type" content=" website" />
      <meta property="og:title" content="Sena Suzuki" />
      <meta property="og:description" content="Frontend Engineer" />
      <meta property="og:site_name" content="Sena Suzuki" />
      <meta property="og:image" content="https://www.settyan.me/ogp.png" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <div className={styles.Wrapper}>
      <Mainvisual /> 
    </div>
  </>
}

export default Index
