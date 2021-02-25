import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengesContext'
import { CountdonwContext } from '../contexts/CountdonwContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengeContext)
    const { resetCountdown } = useContext(CountdonwContext)

    function handleChallengeSucceeded() {
        completeChallenge()
        resetCountdown()
    }
    function handleChallengeFailed() {
        resetChallenge()
        resetCountdown()
    }

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive} >
                    <header> Ganhe {activeChallenge.amount} xp.</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio.</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button
                            type='button'
                            className={styles.challengeFailedButton}
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>

                        <button
                            type='button'
                            className={styles.challengeSucceededButton}
                            onClick={handleChallengeSucceeded}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                    <div className={styles.challengeNotActive}>
                        <strong>
                            Finalize um ciclo para receber desafios a serem completados.
                        </strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level up" />
                            Suba de nivel completando desafios.
                        </p>
                    </div>)}
        </div>
    )
}