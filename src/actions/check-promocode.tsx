'use server'

export async function checkPromocode(promocode: string) {
  const valid = process.env.PROMOCODE

  if (!valid) {
    throw new Error('Server misconfiguration: PROMOCODE is missing')
  }

  return promocode === valid
}
