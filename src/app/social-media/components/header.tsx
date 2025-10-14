import Link from 'next/link'

import { pinyonScript } from '@/lib/fonts'
import { cn } from '@/lib/utils'

export const SocialMediaHeader = () => {
  return (
    <header className='bg-background sticky top-0 z-50 container flex h-18 items-center justify-center border-b'>
      <Link
        className={cn(pinyonScript.className, 'mt-2 text-3xl leading-none')}
        href='/social-media'
      >
        Social Media
      </Link>
    </header>
  )
}
