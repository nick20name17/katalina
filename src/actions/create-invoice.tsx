'use server'

interface CreateInvoiceResponse {
  pageUrl: string
  invoiceId: string
}

interface CreateInvoiceProps {
  amount: number
  destination: string
  comment: string
  redirect?: 'pinterest' | 'comunity'
  promocode?: string
}

const REDIRECT_URL_COMUNITY = process.env.REDIRECT_URL!
const REDIRECT_URL_PINTEREST = process.env.REDIRECT_URL_PINTEREST!

export async function createInvoice({
  amount,
  destination,
  comment,
  redirect = 'comunity',
  promocode
}: CreateInvoiceProps) {
  const X_TOKEN = process.env.X_TOKEN

  const redirectUrl = redirect === 'pinterest' ? REDIRECT_URL_PINTEREST : REDIRECT_URL_COMUNITY

  if (!X_TOKEN || !redirectUrl) {
    throw new Error('Server misconfiguration')
  }

  const payload = {
    amount,
    merchantPaymInfo: {
      destination,
      comment
    },
    redirectUrl: redirectUrl
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
