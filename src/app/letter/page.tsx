import type { Metadata } from 'next'

import { LetterCard } from './components/letter-card'

export const metadata: Metadata = {
  title: 'Letter',
  description: 'Letter page'
}

const LetterPage = () => {
  return (
    <section className='container mt-6'>
      <h1 className='mb-6 text-lg font-medium'>Натисни на лист, люба!</h1>
      <LetterCard />
    </section>
  )
}

export default LetterPage
