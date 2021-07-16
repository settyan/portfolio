import React from "react";
import Head from "next/head";

import { Mainvisual } from "@/components/organisms/mainvisual";
import {getLayout} from "@/layouts/default-layout"

const Index = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Sena Suzuki</title>
        <link rel="canonical" href="https://states-state.vercel.app" />
        <meta name="description" content="Frontend Engineer" />
        <meta property="og:url" content="https://settyan.me" />
        <meta property="og:type" content=" website" />
        <meta property="og:title" content="Sena Suzuki" />
        <meta property="og:description" content="Frontend Engineer" />
        <meta property="og:site_name" content="Sena Suzuki" />
        <meta property="og:image" content="https://settyan.me/ogp.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div>
        <Mainvisual />
      </div>
    </>
  );
};

Index.getLayout = getLayout

export default Index;
