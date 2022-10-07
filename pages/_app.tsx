import '../styles/globals.css'
import type { AppProps } from 'next/app'


import { ThemeProvider } from 'next-themes'
// import { darkTheme } from '../stitches.config'
import dynamic from 'next/dynamic'

const LoadingBar = dynamic(() => import('../components/Loading_Bar'), {
  ssr: false,
})
const Navbar = dynamic(() => import('../components/NavBar'), {
  ssr: false,
})
function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any
  

  return (
    <>
      <LoadingBar/>
      <ThemeProvider attribute="class">
        <Navbar />
        <AnyComponent {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
// export function reportWebVitals(metric: any) {
//   console.log(metric)
// }