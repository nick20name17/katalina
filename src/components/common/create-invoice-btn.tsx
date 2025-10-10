'use client'

import { Loader } from 'lucide-react'
import { useTransition } from 'react'
import { toast } from 'sonner'

import { Button } from '../ui/button'

import { createInvoice } from '@/actions/create-invoice'

interface CreateInvoiceBtnProps {
  amount: number
  destination: string
  comment: string
  redirectUrl: 'stickers' | 'community' | 'animation'
}
export const CreateInvoiceBtn = (props: CreateInvoiceBtnProps) => {
  const [isPending, startTransition] = useTransition()

  const handleClick = async () => {
    const data = await createInvoice(props)
    if (data.pageUrl) {
      window.location.href = data.pageUrl
    } else {
      toast.error('Не вдалося отримати посилання на оплату')
    }
  }
  return (
    <Button
      className='bg-primary hover:bg-primary/ h-11 w-full rounded-lg border-none py-3 font-semibold text-slate-700 transition-all duration-200 hover:shadow-md'
      onClick={() => startTransition(handleClick)}
    >
      {isPending ? <Loader className='text-background mx-auto size-4 animate-spin' /> : 'Онлайн оплата'}
    </Button>
  )
}
