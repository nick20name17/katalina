import { Badge } from '@/components/ui/badge'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { denistina, nightSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { Check, Heart } from 'lucide-react'
import { CreateInvoiceBtn } from './create-invoice-btn'

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

const Caption3 = () => {
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

const HomePage = () => {
    return (
        <div className="container mx-auto max-w-screen-xl">
            <div className="min-h-screen bg-background py-8 lg:px-14 px-8 grid items-start grid-cols-[repeat(auto-fill,minmax(330px,1fr))] gap-10 ">
                <Card className="w-full bg-[#FAF6F1] border-2 border-primary shadow-lg relative  z-10 break-inside-avoid">
                    <div className="absolute top-4 right-4 text-primary/60">
                        {/* <HandwrittenFlower className="w-8 h-8" /> */}
                    </div>
                    <div className="absolute bottom-4 left-4 text-primary/20">
                        <Heart className="w-6 h-6" />
                    </div>

                    <Caption3 />

                    <CardHeader className="text-center space-y-2 pb-6">
                        <div className="flex justify-center">
                            <Badge className="bg-primary text-slate-600 hover:bg-primary/ px-4 py-1 text-sm font-medium">
                                ✨ Найпопулярніше
                            </Badge>
                        </div>
                        <div className="space-y-2">
                            <CardTitle
                                className={cn(
                                    'text-2xl font-semibold text-slate-700',
                                    nightSans.className
                                )}>
                                Телеграм-комʼюніті
                            </CardTitle>
                        </div>
                        <div className="flex items-baseline justify-center space-x-1 relative">
                            <span className="text-4xl font-semibold text-slate-700">
                                1700
                            </span>
                            <svg
                                className="text-primary absolute top-[55%] left-[44%] -translate-x-1/2 "
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

                            <span className="text-slate-400">UAH</span>
                        </div>
                        <div className="text-xs text-slate-500">
                            зросте до <span className="font-semibold">2200 UAH</span>
                        </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="size-5 shrink-0 bg-primary rounded-full flex items-center justify-center">
                                    <Check className="size-3 shrink-0 text-slate-600" />
                                </div>
                                <span className="text-slate-600">туторіали;</span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="size-5 shrink-0 bg-primary rounded-full flex items-center justify-center">
                                    <Check className="size-3 shrink-0 text-slate-600" />
                                </div>
                                <span className="text-slate-600">цікаві фішки;</span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="size-5 shrink-0 bg-primary rounded-full flex items-center justify-center">
                                    <Check className="size-3 shrink-0 text-slate-600" />
                                </div>
                                <span className="text-slate-600">тренди;</span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="size-5 shrink-0 bg-primary rounded-full flex items-center justify-center">
                                    <Check className="size-3 shrink-0 text-slate-600" />
                                </div>
                                <span className="text-slate-600">
                                    мій особистий досвід;
                                </span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="size-5 shrink-0 bg-primary rounded-full flex items-center justify-center">
                                    <Check className="size-3 shrink-0 text-slate-600" />
                                </div>
                                <span className="text-slate-600">корисні матеріали</span>
                            </div>
                        </div>

                        <div className="bg-background rounded-lg p-4 border border-primary/20">
                            <div className="flex items-center space-x-2 mb-2">
                                <span className="text-sm font-medium text-slate-600">
                                    Приємний бонус
                                </span>
                            </div>
                            <ul className="text-sm text-slate-500 space-y-1">
                                <li>• пак для анімаційного монтажу у подарунок</li>
                            </ul>
                        </div>
                    </CardContent>

                    <CardFooter className="pt-6">
                        <CreateInvoiceBtn
                            amount={170000}
                            redirectUrl="community"
                            comment="Доступ до Телеграм-комʼюніті"
                            destination="Доступ до Телеграм-комʼюніті"
                        />
                    </CardFooter>
                </Card>
                <Card className="w-full bg-[#FAF6F1] border-2 border-primary/30  break-inside-avoid shadow-lg relative  z-10">
                    <div className="absolute top-4 right-4 text-primary/60">
                        {/* <HandwrittenFlower className="w-8 h-8" /> */}
                    </div>
                    <div className="absolute bottom-4 left-4 text-primary/20">
                        <Heart className="w-6 h-6" />
                    </div>

                    {/* <Badge className="absolute -top-3 -left-3 text-slate-600  text-sm">
                        <Heart className="size-4" />
                        -50%
                    </Badge> */}

                    <Caption />

                    <CardHeader className="text-center space-y-4 pb-6">
                        <div className="space-y-2">
                            <CardTitle
                                className={cn(
                                    'text-2xl font-semibold text-slate-700',
                                    nightSans.className
                                )}>
                                Пак матеріалів для анімаційного монтажу
                            </CardTitle>
                        </div>
                        <div className="flex items-end justify-center space-x-1 relative">
                            {/* <span className="text-lg line-through text-slate-500">
                                800
                            </span> */}
                            <span className="text-4xl font-semibold text-slate-700">
                                800
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
                        <div className="text-xs text-slate-500">
                            зросте до <span className="font-semibold">1100 UAH</span>
                        </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <div className="flex items-center space-x-3">
                                <div className="size-5 shrink-0 bg-primary rounded-full flex items-center justify-center">
                                    <Check className="size-3 shrink-0 text-slate-600" />
                                </div>
                                <span className="text-slate-600">футажі;</span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="size-5 shrink-0 bg-primary rounded-full flex items-center justify-center">
                                    <Check className="size-3 shrink-0 text-slate-600" />
                                </div>
                                <span className="text-slate-600">фони;</span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="size-5 shrink-0 bg-primary rounded-full flex items-center justify-center">
                                    <Check className="size-3 shrink-0 text-slate-600" />
                                </div>
                                <span className="text-slate-600">стікери</span>
                            </div>
                        </div>
                    </CardContent>

                    <CardFooter className="pt-6">
                        <CreateInvoiceBtn
                            amount={80000}
                            redirectUrl="stickers"
                            comment="Доступ до Паку матеріалів для анімаційного монтажу"
                            destination="Доступ до Паку матеріалів для анімаційного монтажу"
                        />
                    </CardFooter>
                </Card>
                <Card className="w-full bg-[#FAF6F1] border-2 border-primary/30  break-inside-avoid shadow-lg relative  z-10">
                    <div className="absolute top-4 right-4 text-primary/60">
                        {/* <HandwrittenFlower className="w-8 h-8" /> */}
                    </div>
                    <div className="absolute bottom-4 left-4 text-primary/20">
                        <Heart className="w-6 h-6" />
                    </div>

                    {/* <Badge className="absolute -top-3 -left-3 text-slate-600  text-sm">
                        <Heart className="size-4" />
                        -50%
                    </Badge> */}

                    {/* <Caption /> */}

                    <CardHeader className="text-center space-y-4 pb-6">
                        <div className="space-y-2">
                            <CardTitle
                                className={cn(
                                    'text-2xl font-semibold text-slate-700',
                                    nightSans.className
                                )}>
                                Лекція «Captions Design»
                            </CardTitle>
                        </div>
                        <div className="flex items-end justify-center space-x-1 relative">
                            {/* <span className="text-lg line-through text-slate-500">
                                800
                            </span> */}
                            <span className="text-4xl font-semibold text-slate-700">
                                990
                            </span>
                            <span className="text-slate-400">UAH</span>
                            <svg
                                className="text-primary absolute top-[55%] left-[44%] -translate-x-1/2 "
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
                    </CardHeader>

                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <div className="flex items-center space-x-3">
                                <div className="size-5 shrink-0 bg-primary rounded-full flex items-center justify-center">
                                    <Check className="size-3 shrink-0 text-slate-600" />
                                </div>
                                <span className="text-slate-600">
                                    специфіка зйомки для такого типу відео;
                                </span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="size-5 shrink-0 bg-primary rounded-full flex items-center justify-center">
                                    <Check className="size-3 shrink-0 text-slate-600" />
                                </div>
                                <span className="text-slate-600">
                                    правила поєднання шрифтів;
                                </span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="size-5 shrink-0 bg-primary rounded-full flex items-center justify-center">
                                    <Check className="size-3 shrink-0 text-slate-600" />
                                </div>
                                <span className="text-slate-600">
                                    готові шрифтові пари;
                                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="size-5 shrink-0 bg-primary rounded-full flex items-center justify-center">
                                    <Check className="size-3 shrink-0 text-slate-600" />
                                </div>
                                <span className="text-slate-600">
                                    де брати натхнення та ідеї;
                                </span>
                            </div>
                        </div>

                        <div className="bg-background rounded-lg p-4 border border-primary/20">
                            <div className="flex items-center space-x-2 mb-2">
                                <span className="text-sm font-medium text-slate-600">
                                    Приємний бонус
                                </span>
                            </div>
                            <ul className="text-sm text-slate-500 space-y-1">
                                <li>• всі матеріали до відео для практики</li>
                            </ul>
                        </div>
                    </CardContent>

                    <CardFooter className="pt-6">
                        <CreateInvoiceBtn
                            amount={99000}
                            redirectUrl="captions"
                            comment="Доступ до Лекція «Captions Design»"
                            destination="Доступ до Лекція «Captions Design»"
                        />
                    </CardFooter>
                </Card>
                <Card className="w-full bg-[#FAF6F1] border-2 border-primary/30  break-inside-avoid shadow-lg relative  z-10">
                    <div className="absolute top-4 right-4 text-primary/60">
                        {/* <HandwrittenFlower className="w-8 h-8" /> */}
                    </div>
                    <div className="absolute bottom-4 left-4 text-primary/20">
                        <Heart className="w-6 h-6" />
                    </div>

                    {/* <Badge className="absolute -top-3 -left-3 text-slate-600  text-sm">
                        <Heart className="size-4" />
                        -50%
                    </Badge> */}

                    {/* <Caption /> */}

                    <CardHeader className="text-center space-y-4 pb-6">
                        <div className="space-y-2">
                            <CardTitle
                                className={cn(
                                    'text-2xl font-semibold text-slate-700',
                                    nightSans.className
                                )}>
                                Лекція-туторіал «Анімаційний дизайн»
                            </CardTitle>
                        </div>
                        <div className="flex items-end justify-center space-x-1 relative">
                            {/* <span className="text-lg line-through text-slate-500">
                                800
                            </span> */}
                            <span className="text-4xl font-semibold text-slate-700">
                                990
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
                    </CardHeader>

                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <div className="flex items-center space-x-3">
                                <div className="size-5 shrink-0 bg-primary rounded-full flex items-center justify-center">
                                    <Check className="size-3 shrink-0 text-slate-600" />
                                </div>
                                <span className="text-slate-600">
                                    основа анімаційного дизайну;
                                </span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="size-5 shrink-0 bg-primary rounded-full flex items-center justify-center">
                                    <Check className="size-3 shrink-0 text-slate-600" />
                                </div>
                                <span className="text-slate-600">
                                    2 способи створення глибини анімації;
                                </span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="size-5 shrink-0 bg-primary rounded-full flex items-center justify-center">
                                    <Check className="size-3 shrink-0 text-slate-600" />
                                </div>
                                <span className="text-slate-600">
                                    2 туторіали на одне відео (для новачків і просунутих)
                                </span>
                            </div>
                        </div>

                        <div className="bg-background rounded-lg p-4 border border-primary/20">
                            <div className="flex items-center space-x-2 mb-2">
                                <span className="text-sm font-medium text-slate-600">
                                    Приємний бонус
                                </span>
                            </div>
                            <ul className="text-sm text-slate-500 space-y-1">
                                <li>• 10 моїх улюблених шрифтів</li>
                                <li>• Туторіал «Як розмістити текст позаду людини»</li>
                            </ul>
                        </div>
                    </CardContent>

                    <CardFooter className="pt-6">
                        <CreateInvoiceBtn
                            amount={99000}
                            redirectUrl="animation"
                            comment="Доступ до Лекція-туторіал «Анімаційний дизайн»"
                            destination="Доступ до Лекція-туторіал «Анімаційний дизайн»"
                        />
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default HomePage
