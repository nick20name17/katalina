'use client'

import { TextAlignJustify } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '../ui/button'

import { SocialLinks } from '@/app/social-media/components/footer'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

export const Nav = () => {
  const [open, setOpen] = useState(false)

  return (
    <Sheet
      open={open}
      onOpenChange={setOpen}
    >
      <SheetTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
        >
          <TextAlignJustify />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className='sr-only'>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <nav className='h-full'>
          <ul className='mt-6 divide-y divide-gray-200 px-6'>
            <li>
              <Link
                onClick={() => setOpen(false)}
                className='block py-3 text-[17px] uppercase transition-colors hover:text-lime-700'
                href='/'
              >
                Навчальна спільнота
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpen(false)}
                className='block py-3 text-[17px] uppercase transition-colors hover:text-lime-700'
                href='/pinterest'
              >
                Pinterest Guide
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpen(false)}
                className='block py-3 text-[17px] uppercase transition-colors hover:text-lime-700'
                href='https://t.me/ideaflowergarden'
                target='_blank'
              >
                Сад ідей
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpen(false)}
                className='block py-3 text-[17px] uppercase transition-colors hover:text-lime-700'
                href='https://www.patreon.com/bachukrasyvo?utm_campaign=creatorshare_creator'
                target='_blank'
              >
                Подкаст «Квітни»
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setOpen(false)}
                className='block py-3 text-[17px] uppercase transition-colors hover:text-lime-700'
                href='/advent'
              >
                Advent Calendar
              </Link>
            </li>
          </ul>
        </nav>
        <div className='overflow-clip py-10'>
          <Image
            className='mx-auto w-full opacity-20'
            src='/images/cover_04.png'
            alt=''
            width={320}
            height={203}
          />
        </div>
        <SocialLinks className='mb-10' />
      </SheetContent>
    </Sheet>
  )
}
