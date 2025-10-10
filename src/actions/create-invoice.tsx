'use server'

interface CreateInvoiceResponse {
  pageUrl: string
}

interface CreateInvoiceProps {
  amount: number
  destination: string
  comment: string
}

const REDIRECT_URL = process.env.REDIRECT_URL!

export async function createInvoice({ amount, destination, comment }: CreateInvoiceProps) {
  const X_TOKEN = process.env.X_TOKEN

  if (!X_TOKEN || !REDIRECT_URL) {
    throw new Error('Server misconfiguration')
  }

  const payload = {
    amount,
    merchantPaymInfo: {
      destination,
      comment
    },
    redirectUrl: REDIRECT_URL
  }

  try {
    const response = await fetch('https://api.monobank.ua/api/merchant/invoice/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Token': X_TOKEN
      },
      body: JSON.stringify(payload)
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'Failed to create invoice')
    }

    return data as CreateInvoiceResponse
  } catch (error: any) {
    throw new Error(error.message || 'Internal server error')
  }
}
