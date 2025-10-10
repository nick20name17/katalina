import { InstagramIcon } from 'lucide-react'
import Link from 'next/link'

import { Logo } from '../common/logo'

export const Header = () => {
  return (
    <header className='container flex h-18 items-center justify-center'>
      <Link
        className='flex-1'
        href='/'
      >
        <button className='flex items-center'>
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
