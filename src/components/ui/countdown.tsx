'use client'

import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
interface TimeLeft {
    days: number
    hours: number
    minutes: number
    seconds: number
    isExpired: boolean
}

interface CountdownProps {
    className?: string
    saleEndDate: Date
}

export const Countdown = ({ className, saleEndDate }: CountdownProps) => {
    const [isVisible] = useState(true)
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isExpired: false,
    })

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date()
            const difference = saleEndDate.getTime() - now.getTime()

            if (difference <= 0) {
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                    isExpired: true,
                })
                return
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24))
            const hours = Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            )
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((difference % (1000 * 60)) / 1000)

            setTimeLeft({
                days,
                hours,
                minutes,
                seconds,
                isExpired: false,
            })
        }

        calculateTimeLeft()
        const timer = setInterval(calculateTimeLeft, 1000)

        return () => clearInterval(timer)
    }, [])

    if (!isVisible || timeLeft.isExpired) return null

    return (
        <div className={cn('bg-primary text-foreground px-4 py-3 rounded-lg', className)}>
            <div className="flex gap-2 md:items-center">
                <div className="flex grow gap-3 md:items-center">
                    <div
                        className="bg-background flex size-9 shrink-0 items-center justify-center rounded-full max-md:mt-0.5"
                        aria-hidden="true">
                        🌸
                    </div>
                    <div className="flex grow flex-col justify-between gap-3 md:flex-row md:items-center">
                        <div className="space-y-0.5">
                            <p className="text-sm font-medium">
                                Встигни придбати лекцію «Animation design» по зниженій
                                ціни за фідбек
                            </p>
                            <p className="text-muted-foreground text-sm">
                                Зараз ти можеш отримати доступ вигідніше та допомогти
                                зробити продукт ще кращим.
                            </p>
                        </div>
                        <div className="divide-background bg-background font-medium font-mono flex items-center divide-x rounded-md text-sm tabular-nums w-fit">
                            {timeLeft.days > 0 && (
                                <span className="flex h-8 items-center justify-center p-2">
                                    {timeLeft.days}
                                    <span className="text-muted-foreground">d</span>
                                </span>
                            )}
                            <span className="flex h-8 items-center justify-center p-2">
                                {timeLeft.hours.toString().padStart(2, '0')}
                                <span className="text-muted-foreground">h</span>
                            </span>
                            <span className="flex h-8 items-center justify-center p-2">
                                {timeLeft.minutes.toString().padStart(2, '0')}
                                <span className="text-muted-foreground">m</span>
                            </span>
                            <span className="flex h-8 items-center justify-center p-2">
                                {timeLeft.seconds.toString().padStart(2, '0')}
                                <span className="text-muted-foreground">s</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
