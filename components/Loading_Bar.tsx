import { useEffect, useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { Router} from 'next/router'

export default function KoadingBar() {

  const [progress, setProgress] = useState(0)
  
  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      setProgress(33.33)
      setProgress(66.66)
      setProgress(100)
    })
  })
    return (
        <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        waitingTime={10}
        height={3.0}
      />
);
}