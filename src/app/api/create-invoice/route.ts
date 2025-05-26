// app/api/create-invoice/route.js

export async function POST(request: Request) {
    const X_TOKEN = process.env.X_TOKEN
    const REDIRECT_URL = process.env.REDIRECT_URL

    if (!X_TOKEN || !REDIRECT_URL) {
        return new Response(JSON.stringify({ error: 'Server misconfiguration' }), {
            status: 500,
        })
    }

    let body
    try {
        body = await request.json()
    } catch {
        return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400 })
    }

    const { amount = 170000 } = body

    const payload = {
        amount,
        merchantPaymInfo: {
            destination: 'Доступ до телеграм каналу.',
            comment: 'Доступ до телеграм каналу.',
        },
        redirectUrl: REDIRECT_URL,
    }

    try {
        const response = await fetch(
            'https://api.monobank.ua/api/merchant/invoice/create',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Token': X_TOKEN,
                },
                body: JSON.stringify(payload),
            }
        )

        const data = await response.json()

        return new Response(JSON.stringify(data), {
            status: response.status,
            headers: { 'Content-Type': 'application/json' },
        })
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
            status: 500,
        })
    }
}
