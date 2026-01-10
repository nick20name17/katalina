'use server'

interface CreateInvoiceResponse {
  pageUrl: string
  invoiceId: string
}

interface CreateInvoiceProps {
  amount: number
  destination: string
  comment: string
  redirect?: 'pinterest' | 'comunity' | 'library'
  promocode?: string
}

const CURRENCY = {
  UAH: 980,
  USD: 840
}

const REDIRECT_URL_COMUNITY = process.env.REDIRECT_URL!
const REDIRECT_URL_PINTEREST = process.env.REDIRECT_URL_PINTEREST!
const REDIRECT_URL_LIBRARY = process.env.REDIRECT_URL_LIBRARY!

const getUrlRedirect = (redirect: string) => {
  switch (redirect) {
    case 'pinterest':
      return REDIRECT_URL_PINTEREST
    case 'comunity':
      return REDIRECT_URL_COMUNITY
    case 'library':
      return REDIRECT_URL_LIBRARY
    default:
      return REDIRECT_URL_COMUNITY
  }
}

export async function createInvoice({
  amount,
  destination,
  comment,
  redirect = 'comunity',
  promocode
}: CreateInvoiceProps) {
  const X_TOKEN = process.env.X_TOKEN

  const redirectUrl = getUrlRedirect(redirect)

  if (!X_TOKEN || !redirectUrl) {
    throw new Error('Server misconfiguration')
  }

  const payload = {
    amount,
    ccy: CURRENCY.USD,
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
