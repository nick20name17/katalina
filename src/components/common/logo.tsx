import Image from 'next/image'
import Link from 'next/link'

import { pinyonScript } from '@/lib/fonts'
import { cn } from '@/lib/utils'

export const Logo = () => {
  return (
    <Link
      className={cn(pinyonScript.className, 'text-3xl leading-none')}
      href='/'
    >
      <Image
        priority
        className='relative top-1'
        src='/favicon.png'
        alt='Bachu Krasyvo'
        width={120}
        height={120}
      />
    </Link>
  )
}
