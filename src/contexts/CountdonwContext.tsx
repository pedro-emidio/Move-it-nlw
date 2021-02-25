import { Children, createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { ChallengeContext } from './ChallengesContext'

interface CountdonwContextData {
    minutes: number
    seconds: number
    hasFinished: boolean
    isAactive: boolean
    startCountdown: () => void
    resetCountdown: () => void
}

interface CountdonwProviderProps {
    children: ReactNode
}

export const CountdonwContext = createContext({} as CountdonwContextData)

let countdownTimeOut: NodeJS.Timeout

export function CountadonwProvider({ children }: CountdonwProviderProps) {
    const { startNewChallenge } = useContext(ChallengeContext)

    const [time, setTime] = useState(0.1 * 60)
    const [isAactive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    function startCountdown() {
        setIsActive(true)
    }

    function resetCountdown() {
        clearTimeout(countdownTimeOut)
        setIsActive(false)
        setTime(0.1 * 60)
        setHasFinished(false)
    }
    useEffect(() => {
        if (isAactive && time > 0) {
            countdownTimeOut = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else if (isAactive && time === 0) {
            setHasFinished(true)
            setIsActive(false)
            startNewChallenge()
        }


    }, [isAactive, time])

    return (
        <CountdonwContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isAactive,
            startCountdown,
            resetCountdown,
        }}>
            {children}
        </CountdonwContext.Provider>
    )
}
