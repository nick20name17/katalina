import { Metadata } from 'next'

import { BookContent } from './book-content'

export const metadata: Metadata = {
  title: "Creators' Sacred Book",
  description: 'Secrets of visual development and content creation'
}

const BookPage = () => {
  return <BookContent />
}

export default BookPage
