'use client'

import { CirclePlus, Loader } from 'lucide-react'
import { useRef, useState } from 'react'
import { toast } from 'sonner'
import { Button } from './ui/button'
import { Input } from './ui/input'

interface DiscountInputProps {
    success: boolean
    setSuccess: (success: boolean) => void
}

export const DiscountInput = ({ setSuccess, success }: DiscountInputProps) => {
    const [showPromoCode, setShowPromoCode] = useState(false)
    const [promocode, setPromocode] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleApply = async () => {
        setError('')
        setSuccess(false)
        setLoading(true)

        const code = promocode.trim().toLowerCase()
        try {
            const res = await fetch('/api/promocode', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ promocode: code }),
            })
            const data = await res.json()
            if (data.valid) {
                setSuccess(true)
                toast.success('Промокод застосовано!')
                inputRef.current?.blur()
            } else {
                setError('Неправильний промокод')
                toast.error('Неправильний промокод')
            }
        } catch (err) {
            setError('Помилка перевірки промокоду')
            toast.error('Помилка перевірки промокоду')
        } finally {
            setLoading(false)
        }
    }

    const handleInputChange = (e: any) => {
        setPromocode(e.target.value)
        setError('')
        setSuccess(false)
    }

    const handleKeyDown = (e: any) => {
        if (e.key === 'Enter' && promocode.trim() && !loading) {
            handleApply()
        }
    }

    const handleShowPromoCode = () => {
        setShowPromoCode(true)
        setTimeout(() => {
            inputRef.current?.focus()
        }, 50)
    }

    return (
        <div className="flex flex-col gap-1 w-full max-w-xs">
            {!showPromoCode ? (
                <Button
                    variant="ghost"
                    onClick={handleShowPromoCode}
                    className="justify-start w-44">
                    <CirclePlus />
                    Ввести промокод
                </Button>
            ) : (
                <>
                    <div className="flex items-center gap-2">
                        <Input
                            ref={inputRef}
                            value={promocode}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyDown}
                            placeholder="Введіть промокод"
                            type="text"
                            className={`text-xs w-[60%] ${
                                success ? 'border-green-500' : ''
                            } ${error ? 'border-destructive' : ''}`}
                            inputMode="text"
                            aria-label="Промокод"
                            disabled={success || loading}
                            autoComplete="off"
                        />
                        <Button
                            className="w-[40%]"
                            variant={success ? 'success' : 'outline'}
                            onClick={handleApply}
                            disabled={!promocode.trim() || success || loading}>
                            {loading ? (
                                <Loader className="animate-spin" />
                            ) : success ? (
                                'Застосовано'
                            ) : (
                                'Застосувати'
                            )}
                        </Button>
                    </div>
                </>
            )}
        </div>
    )
}
