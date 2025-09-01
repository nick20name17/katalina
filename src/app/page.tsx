import { PriceCard } from '@/components/price-card'
import { denistina } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

const Caption = () => {
    return (
        <div
            className={cn(
                'text-slate-500 text-2xl absolute top-[54%] -translate-y-1/2 -right-5 rotate-5',
                denistina.className
            )}>
            все для старту
            <svg
                className="text-slate-500 absolute top-[-4px] right-1/2 "
                width="40"
                height="83"
                viewBox="0 0 167 83"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M165.984 1.6532C156.81 12.3565 147.497 22.0751 134.239 32.8421C125.799 39.6972 112.954 48.1962 102.442 54.6367C84.3731 65.7072 68.369 71.1318 52.204 75.5625C43.302 77.6997 32.981 79.611 24.606 80.5956C16.2311 81.5802 10.1149 81.5802 1.4967 80.4219"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    )
}

const Caption2 = () => {
    return (
        <div
            className={cn(
                'text-slate-500 text-2xl absolute bottom-[58%] translate-y-1/2 -right-5 rotate-5',
                denistina.className
            )}>
            моe бачення
            <svg
                className="text-slate-500 absolute -top-[70%] left-0 rotate-30 "
                width="40"
                height="21"
                viewBox="0 0 250 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M248.328 19.8062C247.945 19.8062 247.563 19.8062 232.076 16.9392C216.588 14.0723 186.008 8.33838 154.964 5.19343C123.919 2.04847 93.3386 1.66621 74.1446 1.85155C48.0538 2.10348 35.629 4.73587 24.4624 7.42907C18.6474 8.97548 12.5313 10.8868 8.61599 12.0625C4.70073 13.2383 3.17169 13.6205 1.59631 14.0144"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    )
}

export interface CardData {
    id: number
    title: string
    price: number
    priceIncrease?: number
    discount?: number
    featuresHeader?: string
    features: string[]
    popular?: boolean
    promocode?: boolean
    invoice: {
        amount: number
        redirectUrl: 'stickers' | 'community' | 'animation'
        comment: string
        destination: string
    }
    bonus?: string[]
    caption?: ReactNode
}

const cardData: CardData[] = [
    {
        id: 0,
        title: 'Телеграм-комʼюніті',
        price: 2200,
        popular: true,
        caption: <Caption2 />,
        features: [
            'туторіали;',
            'цікаві фішки;',
            'тренди;',
            'мій особистий досвід;',
            'корисні матеріали',
        ],
        bonus: ['пак для анімаційного монтажу у подарунок', 'Лекція «Animation design»'],
        invoice: {
            amount: 220000,
            redirectUrl: 'community',
            comment: 'Доступ до Телеграм-комʼюніті',
            destination: 'Доступ до Телеграм-комʼюніті',
        },
    },
    {
        id: 2,
        title: 'Лекція «Animation design»',
        price: 1500,
        discount: 500,
        featuresHeader:
            'Покрокова інструкція про те, як я створюю анімаційні відео від А до Я',
        features: [
            'з чого починаю;',
            'де шукаю матеріали;',
            ' чим надихаюсь;',
            'як поєдную;',
            'особисті лайфхаки;',
            'вправи для підвищення скілів;',
        ],
        bonus: [
            'детальний конспект лекції;',
            'повний розбір мого найпопулярнішого відео;',
            'домашнє завдання + матеріали',
        ],
        invoice: {
            amount: 100000,
            redirectUrl: 'animation',
            comment: 'Доступ до Лекції «Animation design»',
            destination: 'Доступ до Лекції «Animation design»',
        },
    },
    {
        id: 1,
        title: 'Пак матеріалів для анімаційного монтажу',
        price: 1100,
        features: ['футажі;', 'фони;', 'стікери'],
        caption: <Caption />,
        invoice: {
            amount: 110000,
            redirectUrl: 'stickers',
            comment: 'Доступ до Паку матеріалів для анімаційного монтажу',
            destination: 'Доступ до Паку матеріалів для анімаційного монтажу',
        },
    },
]

const HomePage = () => {
    return (
        <div className="container mx-auto max-w-screen-xl">
            <div className="min-h-screen bg-background py-8 lg:px-14 px-8 grid items-start grid-cols-[repeat(auto-fill,minmax(330px,1fr))] gap-10 ">
                {cardData.map((card) => {
                    return (
                        <PriceCard
                            card={card}
                            key={card.id}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default HomePage
