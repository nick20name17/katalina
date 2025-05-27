'use client'

import { createInvoice } from '@/actions/create-invoice'
import { ShinyButton } from '@/components/ui/shiny-button'
import { Loader } from 'lucide-react'
import { useTransition } from 'react'
import { toast } from 'sonner'

interface CreateInvoiceBtnProps {
    amount: number
    destination: string
    comment: string
    redirectUrl: 'stickers' | 'community'
}
export const CreateInvoiceBtn = (props: CreateInvoiceBtnProps) => {
    const [isPending, startTransition] = useTransition()

    const handleClick = async () => {
        const data = await createInvoice(props)
        if (data.pageUrl) {
            window.open(data.pageUrl)
        } else {
            toast.error('Не вдалося отримати посилання на оплату')
        }
    }
    return (
        <ShinyButton
            className="w-full bg-primary hover:bg-primary/ text-slate-700 font-semibold py-3 rounded-lg transition-all duration-200 hover:shadow-md border-none "
            onClick={() => startTransition(handleClick)}>
            {isPending ? (
                <Loader className="animate-spin mx-auto size-4 text-background" />
            ) : (
                'Онлайн оплата'
            )}
        </ShinyButton>
    )
}
