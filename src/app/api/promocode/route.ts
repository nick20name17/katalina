import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
    const { promocode } = await req.json()
    const validPromo = process.env.PROMOCODE!

    if (promocode && promocode.trim().toLowerCase() === validPromo?.toLowerCase()) {
        return NextResponse.json({ valid: true })
    } else {
        return NextResponse.json({ valid: false })
    }
}
