import Image from 'next/image'
import Link from 'next/link'

import { InstagramLink } from '@/components/layout/header'

export const SocialMediaFooter = () => {
  return (
    <footer className='container pb-10'>
      <div className='overflow-clip'>
        <Image
          className='mx-auto w-full scale-130 opacity-20'
          src='/images/cover_04.png'
          alt=''
          width={320}
          height={203}
        />
      </div>

      <div className='mx-auto flex w-fit items-center gap-4'>
        <PinterestLink />
        <InstagramLink />
        <TikTokLink />
      </div>
    </footer>
  )
}

const TikTokLink = () => {
  return (
    <Link
      className='flex-1'
      target='_blank'
      href='https://www.tiktok.com/@kthzr?_t=ZM-90XdFUuuUgd&_r=1'
    >
      <button className='flex items-center transition-colors hover:text-lime-700'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='28'
          height='28'
          viewBox='0 0 14 14'
        >
          <path
            fill='none'
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M8.422 9.717V1.141m0 8.58a2.893 2.893 0 1 1-2.893-2.893M8.422 1.14a4.288 4.288 0 0 0 4.288 4.29'
          />
        </svg>
      </button>
    </Link>
  )
}

const PinterestLink = () => {
  return (
    <Link
      className='flex-1'
      target='_blank'
      href='https://pin.it/5rW2GLO7z'
    >
      <button className='flex items-center transition-colors hover:text-lime-700'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='26'
          height='26'
          viewBox='0 0 832 1025'
        >
          <path
            fill='currentColor'
            d='M512 768q-53 0-103.5-30.5T335 653q-23 82-38.5 135.5T261 904t-35 92t-25 28q-22-5 .5-173T262 518q-12-45-1-102q14-66 50-113t73-47t54 47t4 113q-10 47-32 86t-49 58q0 1-2 6q32 60 77 99t76 39q61 0 106-47.5T683.5 538T704 384q0-87-38.5-160.5T560.5 107T416 64t-144.5 43t-105 116.5T128 384q0 51 22 101q4 16 1 41t-18.5 47.5T97 594Q0 495 0 384q0-104 55.5-192.5T207 51.5T416 0t209 51.5t151.5 140T832 384q0 72-23.5 141T744 648t-101.5 87T512 768z'
          />
        </svg>
      </button>
    </Link>
  )
}
