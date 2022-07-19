import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
export default function Document() {
  return (
    <Html lang="en" className="theme-compiled">
    <Head />
    <body
      className={`antialiased text-lg bg-white dark:bg-gray-900 overflow-y-auto dark:text-white leading-base`}
    >
      <Main />
      <NextScript />
        <Script src="../path/to/flowbite/dist/flowbite.js"></Script>
      </body>
    </Html>
  )
}