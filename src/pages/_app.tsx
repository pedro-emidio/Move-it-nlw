import '../styles/global.css'

import { ChallengeContext, ChallengeProvider } from '../contexts/ChallengesContext'
import { useState } from 'react'
import { CountadonwProvider, CountdonwContext } from '../contexts/CountdonwContext'

function MyApp({ Component, pageProps }) {
  return (
    <ChallengeProvider>
      <Component {...pageProps} />
    </ChallengeProvider >
  )
}

export default MyApp
