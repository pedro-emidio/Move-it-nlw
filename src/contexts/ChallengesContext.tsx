import { createContext, useState, ReactNode, useEffect } from 'react'
import challenges from '../../challenges.json'

interface challenge {
    type: 'body' | 'eye'
    description: string
    amount: number
}

interface ChallengesContextData {
    level: number
    experienceToNextLevel: number
    challengesCompleted: number
    currentExpirience: number
    levelUp: () => void
    resetChallenge: () => void
    startNewChallenge: () => void
    completeChallenge: () => void
    activeChallenge: challenge
}

interface ChallengeProviderProps {
    children: ReactNode
}

export const ChallengeContext = createContext({} as ChallengesContextData)


export function ChallengeProvider({ children }: ChallengeProviderProps) {
    const [level, setLevel] = useState(1)
    const [currentExpirience, setCurrentExpirence] = useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(0)

    const [activeChallenge, setActiveChallenge] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    useEffect(() => {
        Notification.requestPermission()
    }, [])

    function levelUp() {
        setLevel(level + 1)
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play()

        if (Notification.permission === 'granted') {
            new Notification('Novo desafio!', {
                body: `Valendo ${challenge.amount}xp.`
            })
        }

    }
    function resetChallenge() {
        setActiveChallenge(null)
    }

    function completeChallenge() {
        if (!activeChallenge) {
            return
        }
        const { amount } = activeChallenge

        let finalExperience = currentExpirience + amount

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel
            levelUp()
        }
        setCurrentExpirence(finalExperience)
        setActiveChallenge(null)
        setChallengesCompleted(challengesCompleted + 1)
    }

    return (
        <ChallengeContext.Provider value={{
            level, levelUp, currentExpirience, challengesCompleted, startNewChallenge, activeChallenge, resetChallenge,
            experienceToNextLevel, completeChallenge
        }}>
            { children}
        </ChallengeContext.Provider>


    )
}