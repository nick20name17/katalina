import { nightSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { Countdown } from '../ui/countdown'

export const Header = () => {
    return (
        <header className="container max-w-screen-xl mx-auto py-10 px-6">
            <div className="relative w-fit mx-auto">
                <h1
                    className={cn(
                        'text-center text-4xl font-bold text-slate-700 leading-6 re',
                        nightSans.className
                    )}>
                    <span className="relative"> Доєднуйся та створюй</span>
                    <div className="bg-primary/50 absolute -top-1 -right-4 w-2/3 h-7 z-10 border-x-[1.5px] border-x-pink-300/80">
                        <div className="size-1 bg-pink-300 rounded-full absolute -top-[3.5px] -left-[2.8px]"></div>
                        <div className="size-1 bg-pink-300 rounded-full absolute -bottom-[3.5px] -right-[2.8px]"></div>
                    </div>
                </h1>
            </div>
            <Countdown
                className="mx-auto w-full mt-10 relative z-50"
                saleEndDate={new Date('2025-09-04T00:00:00')}
            />
        </header>
    )
}
