import { InstagramIcon } from 'lucide-react'
import Link from 'next/link'

import { Logo } from '../common/logo'

export const Header = () => {
  return (
    <header className='bg-background sticky top-0 z-50 container flex h-18 items-center justify-center border-b'>
      <Link
        className='flex-1'
        target='_blank'
        href='https://www.instagram.com/bachu.krasyvo/'
      >
        <button className='flex items-center transition-colors hover:text-lime-700'>
          <InstagramIcon
            className='size-7'
            strokeWidth={1}
          />
        </button>
      </Link>
      <div className='flex flex-1 items-center justify-center whitespace-nowrap'>
        <Logo />
      </div>
      <div className='flex-1'></div>
    </header>
  )
}
