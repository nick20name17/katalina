import { NextResponse } from 'next/server'
import path from 'path'

import { readFile } from 'fs/promises'

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'src', 'private', 'pinterest.pdf')

    const fileBuffer = await readFile(filePath)

    const uint8Array = new Uint8Array(fileBuffer)

    return new NextResponse(uint8Array, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="pinterest.pdf"'
      }
    })
  } catch (err) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 })
  }
}
