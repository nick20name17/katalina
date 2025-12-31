import Image from 'next/image'

import {
  CreditCard,
  CreditCardBack,
  CreditCardFlipper,
  CreditCardFront
} from '@/components/kibo-ui/credit-card'

export const LetterCard = () => (
  <CreditCard className='max-w-full'>
    <CreditCardFlipper>
      <CreditCardFront className='*:m-0!'>
        <Image
          src='/images/letter/cover_01.jpg'
          fill
          alt='Letter Cover'
        />
      </CreditCardFront>
      <CreditCardBack className='*:m-0!'>
        <Image
          src='/images/letter/cover_02.jpg'
          fill
          alt='Letter'
        />
      </CreditCardBack>
    </CreditCardFlipper>
  </CreditCard>
)
