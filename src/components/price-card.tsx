'use client'

import { CreateInvoiceBtn } from '@/app/create-invoice-btn'
import { CardData } from '@/app/page'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { nightSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { Check, Heart } from 'lucide-react'
import { useState } from 'react'
import { DiscountInput } from './discount-input'
import { Badge } from './ui/badge'

export const PriceCard = ({ card }: { card: CardData }) => {
    const [success, setSuccess] = useState(false)

    return (
        <Card
            className={cn(
                'w-full bg-[#FAF6F1] border-2 border-primary/30  break-inside-avoid shadow-lg relative z-10',
                card.popular ? 'border-primary' : ''
            )}
            key={card.id}>
            <div className="absolute bottom-4 left-4 text-primary/20">
                <Heart className="w-6 h-6" />
            </div>

            {/* <Badge className="absolute -top-3 -left-3 text-slate-600  text-sm">
                        <Heart className="size-4" />
                        -50%
                    </Badge> */}

            {card.caption}

            <CardHeader className="text-center space-y-4 pb-6">
                {card.popular ? (
                    <div className="flex justify-center">
                        <Badge className="bg-primary text-slate-600 hover:bg-primary/ px-4 py-1 text-sm font-medium">
                            ✨ Найпопулярніше
                        </Badge>
                    </div>
                ) : null}
                <div className="space-y-2">
                    <CardTitle
                        className={cn(
                            'text-2xl font-semibold text-slate-700',
                            nightSans.className
                        )}>
                        {card.title}
                    </CardTitle>
                </div>
                <div className="flex items-end justify-center space-x-1 relative">
                    {/* <span className="text-lg line-through text-slate-500">
                                800
                            </span> */}
                    <span className="text-4xl font-semibold text-slate-700">
                        {success ? card.price - card.price * 0.05 : card.price}
                    </span>
                    <span className="text-slate-400">UAH</span>
                    <svg
                        className="text-primary absolute top-[55%] left-[44%] -translate-x-1/2 rotate-x-180 "
                        width="80"
                        height="40"
                        viewBox="0 0 228 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1 38.9999C1 25.6093 8.96517 3.32929 10.5 2.5474C13.901 0.814833 18.2208 17.54 41 28C50.0613 32.1609 56.5 13.3137 63.5 6.49999C66.365 3.71126 71.5632 9.38752 95.1069 24.8285C105.366 31.5566 108.77 32.6474 111.272 34.1881C112.602 35.0069 114.156 35.7287 115.517 33.829C126.927 17.9035 135.498 6.69691 138 6.49999C154.172 5.22723 173.986 22.5929 181.706 25.3034C184.332 26.2252 184.84 24.1914 185.036 22.6392C186.01 14.9643 187.156 6.42211 190.237 2.54738C194.109 -2.32137 202.586 5.61125 215.878 12.5498C218.814 14.1136 219.961 14.8782 221.125 15.8454C222.289 16.8126 223.436 17.9594 226.934 20.2993"
                            stroke="currentColor"
                            strokeWidth="5"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
                {card.priceIncrease ? (
                    <div className="text-xs text-slate-500">
                        зросте до{' '}
                        <span className="font-semibold">{card.priceIncrease} UAH</span>
                    </div>
                ) : null}
            </CardHeader>

            <CardContent className="space-y-6">
                <div className="space-y-4">
                    {card.featuresHeader ? (
                        <h3 className="text-sm text-slate-600">{card.featuresHeader}</h3>
                    ) : null}
                    {card.features.map((feat) => {
                        return (
                            <div
                                className="flex items-center space-x-3"
                                key={feat}>
                                <div className="size-5 shrink-0 bg-primary rounded-full flex items-center justify-center">
                                    <Check className="size-3 shrink-0 text-slate-600" />
                                </div>
                                <span className="text-slate-600">{feat}</span>
                            </div>
                        )
                    })}
                </div>

                {card.bonus?.length ? (
                    <div className="bg-background rounded-lg p-4 border border-primary/20">
                        <div className="flex items-center space-x-2 mb-2">
                            <span className="text-sm font-medium text-slate-600">
                                Приємний бонус
                            </span>
                        </div>
                        <ul className="text-sm text-slate-500 space-y-1">
                            {card.bonus.map((bon) => {
                                return <li key={bon}>• {bon}</li>
                            })}
                        </ul>
                    </div>
                ) : null}
            </CardContent>

            <CardFooter className="pt-6 flex-col gap-3">
                {card.promocode ? (
                    <DiscountInput
                        setSuccess={setSuccess}
                        success={success}
                    />
                ) : null}

                <CreateInvoiceBtn
                    amount={
                        success
                            ? card.invoice.amount - card.invoice.amount * 0.05
                            : card.invoice.amount
                    }
                    redirectUrl={card.invoice.redirectUrl}
                    comment={card.invoice.comment}
                    destination={card.invoice.destination}
                />
            </CardFooter>
        </Card>
    )
}
