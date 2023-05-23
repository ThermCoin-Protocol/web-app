// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap"
          rel="stylesheet"
        />
        <link rel="Sun Icon" href="../../VerginaSun.ico" />
        <meta
          property="title"
          content="ThermCoin - The Future's Energy Based Digital Currency"
          key="title"
        />
        <meta
          name="description"
          content="The ThermCoin protocol is a decentralized, open-source, and community-driven project that aims to create a new digital currency that is backed by renewable energy."
          key="desc"
        />
        {/* <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID});
        `}
        </Script> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
