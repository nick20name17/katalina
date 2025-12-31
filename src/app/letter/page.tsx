import type { Metadata } from 'next'

import { LetterCard } from './components/letter-card'

export const metadata: Metadata = {
  title: 'Letter',
  description: 'Letter page'
}

const LetterPage = () => {
  return (
    <section className='container mt-6'>
      <LetterCard />
      <h1 className='mb-6 text-center text-sm uppercase'>Click on the Letter, Darling!</h1>
    </section>
  )
}

export default LetterPage
