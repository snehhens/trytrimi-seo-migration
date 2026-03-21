import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="format-detection" content="telephone=no, email=no, address=no" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
