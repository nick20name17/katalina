'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Check, Loader2, Plus } from 'lucide-react'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod/mini'

import { Button } from '../ui/button'
import { Form } from '../ui/form'
import { Input } from '../ui/input'

import { checkPromocode } from '@/actions/check-promocode'
import { createInvoice } from '@/actions/create-invoice'
import { FormControl, FormField, FormItem } from '@/components/ui/form'
import { cn } from '@/lib/utils'

interface CreateInvoiceBtnWithPromoProps {
  amount: number // original amount in cents
  destination: string
  comment: string
  currency?: 'UAH' | 'USD'
  className?: string
  redirect?: 'pinterest' | 'comunity'
}

const promoSchema = z.object({
  promo: z.string().check(z.minLength(1, { error: 'Введіть промокод' }))
})

export const CreateInvoiceBtnWithPromo = ({
  amount,
  destination,
  comment,
  className,
  redirect = 'comunity',
  currency
}: CreateInvoiceBtnWithPromoProps) => {
  const form = useForm({
    defaultValues: { promo: '' },
    resolver: zodResolver(promoSchema)
  })

  const currencyText = currency === 'UAH' ? 'грн' : '$'

  const [isPending, startTransition] = useTransition()
  const [checkingPromo, setCheckingPromo] = useState(false)
  const [validPromo, setValidPromo] = useState<string | null>(null)
  const [discountedAmount, setDiscountedAmount] = useState(amount)

  const handleClick = async () => {
    const promoValue = validPromo ?? undefined

    const data = await createInvoice({
      amount: discountedAmount,
      destination,
      comment,
      redirect,
      promocode: promoValue
    })

    if (data.pageUrl) {
      window.location.href = data.pageUrl
    }
  }

  const handleSetPromo = async (formData: z.infer<typeof promoSchema>) => {
    setCheckingPromo(true)
    setValidPromo(null)

    const isValid = await checkPromocode(formData.promo)

    if (!isValid) {
      form.setError('promo', { message: 'Промокод не вірний' })
      setDiscountedAmount(amount)
      setCheckingPromo(false)
      return
    }

    setValidPromo(formData.promo)
    setDiscountedAmount(Math.round(amount * 0.9))
    form.clearErrors('promo')
    setCheckingPromo(false)
  }

  return (
    <div className='flex flex-col gap-4 text-center'>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>
          {discountedAmount / 100} {currencyText}{' '}
          {/* {validPromo && <span className='text-sm text-lime-700'>(знижка 10%)</span>} */}
        </p>
        <Button
          className={cn('w-40 uppercase', className)}
          variant='outline'
          onClick={() => startTransition(handleClick)}
          disabled={isPending}
        >
          {isPending ? <Loader2 className='size-4 animate-spin text-lime-700' /> : 'Придбати'}
        </Button>
      </div>
      <Form {...form}>
        <form
          autoComplete='off'
          className='flex w-full items-center gap-2'
          onSubmit={form.handleSubmit(handleSetPromo)}
        >
          <FormField
            control={form.control}
            name='promo'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className='w-[213px]'
                    placeholder='промокод'
                    {...field}
                    disabled={checkingPromo || !!validPromo}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button
            variant='outline'
            size='icon'
            type='submit'
            disabled={checkingPromo || !!validPromo}
          >
            {checkingPromo ? (
              <Loader2 className='size-4 animate-spin' />
            ) : validPromo ? (
              <Check strokeWidth={1.5} />
            ) : (
              <Plus strokeWidth={1.5} />
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
}
