import Link from 'next/link'

import { Logo } from '../common/logo'

import { cn } from '@/lib/utils'

export const Header = () => {
  return (
    <header className='bg-background sticky top-0 z-50 container flex h-18 items-center justify-center border-b'>
      <InstagramLink />
      <div className='flex flex-1 items-center justify-center whitespace-nowrap'>
        <Logo />
      </div>
      <div className='flex-1'></div>
    </header>
  )
}

export const InstagramLink = ({ className }: { className?: string }) => {
  return (
    <Link
      className={cn(className, 'flex-1')}
      target='_blank'
      href='https://www.instagram.com/bachu.krasyvo/'
    >
      <button className='flex items-center transition-colors hover:text-lime-700'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='28'
          height='28'
          viewBox='0 0 24 24'
          fill='none'
        >
          <path
            d='M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z'
            stroke='currentColor'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
          ></path>
          <path
            d='M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z'
            stroke='currentColor'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
          ></path>
          <path
            d='M17.636 7h.012'
            stroke='currentColor'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
          ></path>
        </svg>
      </button>
    </Link>
  )
}
