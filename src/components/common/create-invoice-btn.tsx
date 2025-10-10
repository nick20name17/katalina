'use client'

import { Loader2 } from 'lucide-react'
import { useTransition } from 'react'
import { toast } from 'sonner'

import { Button } from '../ui/button'

import { createInvoice } from '@/actions/create-invoice'
import { cn } from '@/lib/utils'

interface CreateInvoiceBtnProps {
  amount: number
  destination: string
  comment: string
  className?: string
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
      className={cn('w-40 uppercase', props.className)}
      variant='outline'
      onClick={() => startTransition(handleClick)}
    >
      {isPending ? <Loader2 className='mx-auto size-4 animate-spin text-lime-700' /> : 'Придбати'}
    </Button>
  )
}
