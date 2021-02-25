import { useState, useEffect, useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengesContext'
import { CountdonwContext } from '../contexts/CountdonwContext'
import styles from '../styles/components/Coutdown.module.css'


export function Coutdown() {
    const {
        minutes,
        seconds,
        hasFinished,
        isAactive,
        startCountdown,
        resetCountdown
    } = useContext(CountdonwContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')


    return (
        <div>
            <div className={styles.coutdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button disabled className={styles.startCountdownButton}>
                    Ciclo encerrado.
                </button>
            ) : (
                    <>
                        {isAactive ? (<button type="button"
                            className={`${styles.startCountdownButton} ${styles.startCountdownButtonActive}`}
                            onClick={resetCountdown}>
                            Abandonar ciclo
                        </button>
                        ) : (
                                <button type="button"
                                    className={styles.startCountdownButton}
                                    onClick={startCountdown}>
                                    Iniciar ciclo
                                </button>)}
                    </>
                )}
        </div>
    )
}