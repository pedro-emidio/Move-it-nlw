import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengeContext)
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/pedro-emidio.png" alt="" />
            <div>
                <strong>Pedro Emídio</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"></img>
                    {level}
                </p>
            </div>
        </div>
    )
}