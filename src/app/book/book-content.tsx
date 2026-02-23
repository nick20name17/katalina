'use client'

import Image from 'next/image'
import Link from 'next/link'

import { CreateInvoiceBtnWithPromo } from '@/components/common/create-invoice-btn-with-promo'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { pinyonScript } from '@/lib/fonts'
import { translations, useLanguage } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const t = translations.book

export function BookContent() {
  const { language } = useLanguage()

  return (
    <>
      <section className='relative container mt-6'>
        <h1 className={cn(pinyonScript.className, 'text-center text-[58px] leading-[1.2]')}>
          {t.title[language]}
        </h1>
        <div className='relative -top-30 -left-4 flex h-50 w-64 flex-col justify-end py-4 pl-6'>
          <div
            className='absolute inset-0 bg-blue-200 bg-center bg-no-repeat opacity-50'
            style={{ backgroundImage: 'url(/images/book/cover_01.jpg)' }}
          />

          <div className='relative z-20 text-[13px]'>
            {t.subtitle[language].map((line, i) => (
              <p key={i}>{line}</p>
            ))}
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
            <div>{t.author1Role[language]}</div>
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
              <div>{t.author2Role[language]}</div>
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
        <h2>{t.whatIncluded[language]}</h2>
        <ul className='mt-4 space-y-1'>
          {t.features[language].map((feature, i) => (
            <li
              key={i}
              className='text-sm'
            >
              {feature}
            </li>
          ))}
        </ul>

        <div className='mt-8 flex items-center justify-center'>
          <Link href='/book/#buy'>
            <Button
              className='w-64 uppercase'
              variant='outline'
            >
              {t.buyButton[language]}
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
        <h2 className='mt-6'>{t.forYouIf[language]}</h2>
        <ul className='mt-4 space-y-1'>
          {t.targetAudience[language].map((item, i) => (
            <li
              key={i}
              className='text-sm'
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section
        className='container mt-12'
        id='buy'
      >
        <div className='border-b'></div>
        <h2 className={cn(pinyonScript.className, 'mt-6 text-center text-[32px]')}>
          «Creators' Sacred Book»
        </h2>
        <p className='mt-3 text-center text-[13px]'>{t.buySection.description[language]}</p>
        <div className='mt-6 flex flex-col items-center justify-center'>
          <CreateInvoiceBtnWithPromo
            redirect='book'
            amount={700}
            comment={t.buySection.comment[language]}
            destination={t.buySection.comment[language]}
          />
        </div>
      </section>

      <section className='container mt-16 px-8'>
        <div className='border-t pt-8'></div>
        <h2 className='text-2xl leading-none uppercase'>{t.faq.title[language]}</h2>

        <Accordion
          type='single'
          collapsible
          className='w-full'
        >
          {t.faq.questions[language].map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i + 1}`}
            >
              <AccordionTrigger className='text-balance'>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <footer className='mt-5'></footer>
    </>
  )
}
