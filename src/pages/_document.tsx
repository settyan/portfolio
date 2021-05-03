import Document, { Html, Head, Main,NextScript,DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang="ja">
        <Head prefix="og: http://ogp.me/ns#">
            <link rel="canonical" href="https://www.settyan.me"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
