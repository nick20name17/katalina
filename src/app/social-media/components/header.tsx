import Link from 'next/link'

import { Nav } from '@/components/layout/nav'
import { pinyonScript } from '@/lib/fonts'
import { cn } from '@/lib/utils'

export const SocialMediaHeader = () => {
  return (
    <header className='bg-background sticky top-0 z-50 container flex h-18 items-center justify-between border-b'>
      <div className='flex-1'></div>
      <div className='flex items-center justify-center'>
        <Link
          className={cn(pinyonScript.className, 'mt-2 text-3xl leading-none')}
          href='/social-media'
        >
          Social Media
        </Link>
      </div>
      <div className='flex flex-1 justify-end'>
        <Nav />
      </div>
    </header>
  )
}
