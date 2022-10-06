import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
export default function Document() {
  return (
    <Html lang="en" className="theme-compiled">
      <Head />
      <body
        className={`leading-base overflow-y-auto bg-white text-lg antialiased dark:bg-gray-900 dark:text-white`}
      >
        <Main />
        <NextScript />
        <Script src="../path/to/flowbite/dist/flowbite.js"></Script>
      </body>
    </Html>
  )
}
