import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { CreateInvoiceBtnWithPromo } from '@/components/common/create-invoice-btn-with-promo'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { pinyonScript } from '@/lib/fonts'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Creators’ Sacred Book',
  description: 'Secrets of visual development and content creation'
}

const BookPage = () => {
  return (
    <>
      <section className='relative container mt-6'>
        <h1 className={cn(pinyonScript.className, 'text-center text-[58px] leading-[1.2]')}>
          Creators’ Sacred Book
        </h1>
        <div className='relative -top-30 -left-4 flex h-50 w-64 flex-col justify-end py-4 pl-6'>
          <div
            className='absolute inset-0 bg-blue-200 bg-center bg-no-repeat opacity-50'
            style={{ backgroundImage: 'url(/images/book/cover_01.jpg)' }}
          />

          <div className='relative z-20 text-[13px]'>
            <p>secrets of visual</p>
            <p>development and content</p>
            <p>creation</p>
          </div>
        </div>
        <div className='absolute right-5 bottom-36'>
          <Image
            src='/images/book/cover_05.png'
            alt='pearl'
            width={24}
            height={24}
          />
          <Image
            className='relative top-1 left-3'
            src='/images/book/cover_05.png'
            alt='pearl'
            width={16}
            height={16}
          />
          <Image
            className='relative top-2 -left-24'
            src='/images/book/cover_05.png'
            alt='pearl'
            width={16}
            height={16}
          />
        </div>
      </section>
      <section className='container -mt-16 grid grid-cols-2 items-stretch gap-10 border-y py-8'>
        {/* Column 1 */}
        <div className='relative flex h-full flex-col space-y-3'>
          <div className='relative aspect-3/4 flex-1'>
            <Image
              src='/images/book/cover_04.jpg'
              alt='Book'
              fill
              className='object-cover'
            />
          </div>

          <div className='text-xs'>
            <a
              className='transition-all hover:text-lime-700 hover:underline'
              href='https://www.instagram.com/alexandrarosevoznytska'
              target='_blank'
            >
              @alexandrarosevoznytska
            </a>
            <div>контент-креаторка, артдиректорка</div>
          </div>

          <div className='absolute top-1/2 -right-8 -translate-y-1/2 text-xs'>(01)</div>
        </div>

        {/* Column 2 */}
        <div className='flex h-full flex-col space-y-3'>
          <div className='flex items-end justify-between'>
            <div className='text-xs'>
              <a
                className='transition-all hover:text-lime-700 hover:underline'
                href='https://www.instagram.com/bachu.krasyvo'
                target='_blank'
              >
                @bachu.krasyvo
              </a>
              <div>контент-креаторка, монтажерка</div>
            </div>
            <div className='pb-2 text-xs'>(02)</div>
          </div>

          <div className='relative flex-1'>
            <Image
              src='/images/book/cover_02.jpg'
              alt='Book'
              fill
              className='object-cover'
            />
          </div>
        </div>
      </section>

      <section className='container mt-6'>
        <h2>Що входить у файл:</h2>
        <ul className='mt-4 space-y-1'>
          <li className='text-sm'>(01) Як працювати з референсами, а не просто зберігати;</li>
          <li className='text-sm'>(02) Як дивитись на кадр: світло, глибина, рух, пауза;</li>
          <li className='text-sm'>(03) Як зрозуміти, чому референс чіпляє;</li>
          <li className='text-sm'>(04) Як не копіювати, а інтерпретувати;</li>
          <li className='text-sm'>(05) Тренди vs позачасовий стиль;</li>
          <li className='text-sm'>(06) Які тренди можна використовувати без шкоди;</li>
          <li className='text-sm'>(07) Чому сліпе слідування трендам вбиває стиль;</li>
          <li className='text-sm'>(08) Як працювати, коли немає натхнення;</li>
          <li className='text-sm'>(09) Збірка сезонних референсів</li>
        </ul>

        <div className='mt-8 flex items-center justify-center'>
          <Link href='/book/#buy'>
            <Button
              className='w-64 uppercase'
              variant='outline'
            >
              Придбати
            </Button>
          </Link>
        </div>
      </section>

      <section className='container mt-8'>
        <Image
          src='/images/book/cover_03.png'
          alt='Book'
          width={1080}
          height={1080}
        />
        <h2 className='mt-6'>Ця книга для тебе, якщо:</h2>
        <ul className='mt-4 space-y-1'>
          <li className='text-sm'>
            - ти регулярно ловиш себе на думці «немає ідей», коли потрібно щось зняти
          </li>
          <li className='text-sm'>
            - ти втомилась зберігати хаотичні референси, але так і не використовувати їх
          </li>
          <li className='text-sm'>- ти хочеш, щоб контент виглядав цілісно та атмосферно</li>
          <li className='text-sm'>- ти прагнеш виробити власний стиль, а не копіювати чужий</li>
          <li className='text-sm'>
            - ти хочеш навчитися бачити красу в простих речах і використовувати це в контенті
          </li>
          <li className='text-sm'>
            - ти хочеш мати готові ідеї для кожного сезону, щоб не вигадувати з нуля
          </li>
          <li className='text-sm'>- ти хочеш знімати контент, який хочеться зберегти</li>
          <li className='text-sm'>- ти працюєш з контентом — або хочеш почати</li>
          <li className='text-sm'>- і відчуваєш, що в тобі є більше, ніж ти зараз показуєш</li>
        </ul>
      </section>

      <section
        className='container mt-12'
        id='buy'
      >
        <div className='border-b'></div>
        <h2 className={cn(pinyonScript.className, 'mt-6 text-center text-[32px]')}>
          «Creators’ Sacred Book»
        </h2>
        <p className='mt-3 text-center text-[13px]'>
          And now you can grab these tips and turn your ideas into authentic content
        </p>
        <div className='mt-6 flex flex-col items-center justify-center'>
          <CreateInvoiceBtnWithPromo
            redirect='library'
            amount={400}
            comment='Доступ до  «Creators’ Sacred Book»'
            destination='Доступ до  «Creators’ Sacred Book»'
          />
        </div>
      </section>

      <section className='container mt-16 px-8'>
        <div className='border-t pt-8'></div>
        <h2 className='text-2xl leading-none uppercase'>FAQ</h2>

        <Accordion
          type='single'
          collapsible
          className='w-full'
        >
          <AccordionItem value='item-1'>
            <AccordionTrigger className='text-balance'>Коли я отримаю книгу?</AccordionTrigger>
            <AccordionContent>Після оплати книга відразу буде скачана на ваш пристрій</AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-2'>
            <AccordionTrigger>В якому форматі книга?</AccordionTrigger>
            <AccordionContent>У зручному PDF форматі</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <footer className='mt-5'></footer>
    </>
  )
}

export default BookPage
