import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/NavBar'
import { useEffect, useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'next-themes'
import { darkTheme } from '../stitches.config'

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any
  const [progress, setProgress] = useState(0)
  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(33.33)
      setProgress(66.66)
      setProgress(100)
    })
  })

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        waitingTime={10}
        height={3.0}
      />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        value={{
          light: 'light',
          dark: darkTheme.className,
        }}
      >
        <Navbar />
        <AnyComponent {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
