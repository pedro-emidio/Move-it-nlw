import { CompletedChallenges } from '../components/CompletedChallenges';
import { Coutdown } from '../components/Coutdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile'
import { ChallengeBox } from '../components/ChallengeBox';

import styles from '../styles/pages/Home.module.css'
import Head from 'next/head'
import { CountadonwProvider } from '../contexts/CountdonwContext';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Move-it</title>
      </Head>

      <ExperienceBar />
      <CountadonwProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Coutdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountadonwProvider>
    </div>
  )
}