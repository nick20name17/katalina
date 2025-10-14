import Image from 'next/image'
import Link from 'next/link'

import { CreateInvoiceBtn } from '@/components/common/create-invoice-btn'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { nightSans, pinyonScript } from '@/lib/fonts'
import { cn } from '@/lib/utils'

const HomePage = () => {
  return (
    <>
      <Header />
      <section className='container max-w-full px-0'>
        <h2 className='hidden'>Bachu Krasyvo</h2>
        <Image
          className='mx-auto'
          src='/images/cover_01.jpg'
          alt=''
          priority
          quality={100}
          width={1200}
          height={630}
        />
        <div className='container mt-4 text-center text-sm'>
          <span> Для того, щоб повністю поринути в атмосферу нашої спільноти включи </span>
          <Link
            className='text-lime-700 underline underline-offset-4 transition-colors'
            target='_blank'
            href='https://music.youtube.com/playlist?list=PL51GtoHHmKiVH5GD8ovehGJ5pS1o-tu8P&si=gzKwhdtO84txy9z0'
          >
            цей плейлист.
          </Link>
          <div className='border-b pb-8'></div>
        </div>
      </section>
      <section className='container mt-8'>
        <h2
          className='text-center'
          lang='en'
        >
          I was created to create.
        </h2>
        <div className='mt-5 flex items-center justify-center gap-2 text-[13px] [&_*]:flex-1'>
          <div className='text-center'>(01)</div>
          <Image
            src='/images/cover_02.jpg'
            alt=''
            width={150}
            height={150}
          />
          <div>(community)</div>
        </div>

        <p className='mt-6 text-center text-sm leading-relaxed'>
          <span className='font-medium'>Навчальна спільнота для монтажерок</span> — це простір, де панує
          girlhood vibe. Там я ділюся корисною інформацією, туторіалами, своїм баченням і знахідками.
          Доєднуючись, ви автоматично отримуєте послугу мого супроводу та ще кілька плюшок.
        </p>
      </section>
      <section className='relative mt-16'>
        <h2 className='hidden'>Bachu Krasyvo</h2>
        <div className='absolute -top-22 left-1/2 h-35 w-70 -translate-x-1/2 bg-[#FFFCF0]/80'></div>
        <Image
          className='mx-auto'
          src='/images/cover_03.jpg'
          alt=''
          width={1200}
          height={630}
        />

        <div className='mt-8 flex items-center justify-center'>
          <Link href='/#community'>
            <Button
              className='w-64 uppercase'
              variant='outline'
            >
              Доєднатися до спільноти
            </Button>
          </Link>
        </div>
      </section>

      <section className='relative z-10 container mt-16'>
        <h2 className='mx-auto flex w-fit flex-col gap-1'>
          <span className={cn(nightSans.className, 'text-3xl')}>(ця спільнота для тебе)</span>
          <span className='text-right'>якщо ти хочеш:</span>
        </h2>

        <ul className='mt-5 space-y-5 border-t pt-4 text-sm'>
          <li>
            <div className='font-medium'>(01)</div>
            <p>
              Навчитись створювати унікальні відео, які будуть виділятися серед інших, запам'ятовуватися та
              приносити чудових клієнтів.
            </p>
          </li>
          <li>
            <div className='font-medium'>(02)</div>
            <p>Мислити нестандартно та креативно.</p>
          </li>
          <li>
            <div className='font-medium'>(03)</div>
            <p>Надихатися щодня та розвивати надивленість, яка є основою творчості.</p>
          </li>
          <li>
            <div className='font-medium'>(04)</div>
            <p>
              Мати наставницю (мене), яка може допомогти та проконсультувати по будь-якому питанню, яке
              стосується монтажу.
            </p>
          </li>
        </ul>
      </section>

      <section className=''>
        <h2 className='hidden'>Bachu Krasyvo</h2>
        <Image
          className='mx-auto'
          src='/images/cover_04.png'
          alt=''
          width={320}
          height={203}
        />
      </section>

      <section className='relative z-10 container mt-6'>
        <h2 className='mx-auto flex w-fit flex-col gap-1'>
          <span className={cn(nightSans.className, 'mr-12 text-3xl')}>(що ти отримаєш)</span>
          <span className='text-right'>доєднавшись до спільноти:</span>
        </h2>

        <ul className='mt-5 space-y-5 border-t pt-4 text-sm'>
          <li>
            <div className='font-medium'>(01)</div>
            <p>Туторіали на мої відео та відео з пінтерест.</p>
          </li>
          <li>
            <div className='font-medium'>(02)</div>
            <p>Розбори профілів блогерів, інфлюенсерів та експертів.</p>
          </li>
          <li>
            <div className='font-medium'>(03)</div>
            <p>Подкаст «Квітни», де я говорю про монтаж і не тільки.</p>
          </li>
          <li>
            <div className='font-medium'>(04)</div>
            <p>Ресурси, які я використовую сама і всім раджу.</p>
          </li>
          <li>
            <div className='font-medium'>(05)</div>
            <p>
              Спілкування та супровід від мене (я завжди на звʼязку і можу відповісти на будь-які ваші
              запитання та проконсультувати).
            </p>
          </li>
          <li>
            <div className='font-medium'>(06)</div>
            <p>Special пропозиції на мої подальші продукти.</p>
          </li>
          <li>
            <div className='font-medium'>(07)</div>
            <p>Подарунки: лекція «Animation Design», пак матеріалів з 1000+ елементів.</p>
          </li>
          <li>
            <div className='font-medium'>(08)</div>
            <p>Пожиттєвий доступ при разовій оплаті.</p>
          </li>
        </ul>
      </section>

      <section
        className='mt-16 scroll-mt-24'
        id='community'
      >
        <h2 className='hidden'>Bachu Krasyvo</h2>
        <Image
          className='w-full'
          src='/images/cover_06.jpg'
          alt=''
          width={320}
          height={203}
        />
      </section>

      <section className='container mt-15 text-center'>
        <h2 className='flex flex-col font-medium'>
          <span className={cn(pinyonScript.className, 'text-[44px] leading-none')}>«Secret Garden»</span>
        </h2>
        <p className='px-4 text-sm text-pretty'>Доступ до спільноти. Один платіж — нескінченне натхнення</p>

        <p className='mt-6 text-lg font-medium'>2200 грн</p>

        <div className='mt-3 flex items-center justify-center'>
          <CreateInvoiceBtn
            amount={220000}
            comment='Доступ до телеграм спільноти'
            destination='Доступ до телеграм спільноти'
          />
        </div>
      </section>

      <section className='container mt-16'>
        <div className='border-t pt-8'></div>
        <h2 className='mr-12 flex flex-col items-start text-center'>
          <span className='text-2xl leading-none uppercase'>Найпоширеніші</span>
          <span className={cn(nightSans.className, 'text-3xl leading-none')}>запитання</span>
        </h2>

        <Accordion
          type='single'
          collapsible
          className='w-full'
        >
          <AccordionItem value='item-1'>
            <AccordionTrigger className='text-balance'>
              Де взяти посилання на подарунки (лекцію та пак)?
            </AccordionTrigger>
            <AccordionContent>У спільноті, в одному із закріплених постів.</AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-2'>
            <AccordionTrigger>Чи потрібно вносити оплату кожен місяць?</AccordionTrigger>
            <AccordionContent>Ні, оплата разова, а доступ назавжди.</AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-3'>
            <AccordionTrigger>
              Чи можу я висловлювати побажання з приводу контенту на каналі?
            </AccordionTrigger>
            <AccordionContent>
              Так, обовʼязково! В цьому весь сенс продукту — гнучкість. Всі зауваження та побажання приймаю в
              особисті повідомлення в Instagram.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-4'>
            <AccordionTrigger>Що входить у ваш супровід?</AccordionTrigger>
            <AccordionContent>
              Отримуючи доступ до комʼюніті, ви можете завжди написати мені в особисті: задавати будь-які
              питання з приводу монтажу, надіслати відео на перевірку, отримати пораду чи пояснення — як саме
              повторити мої прийоми.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      <Footer />
    </>
  )
}

export default HomePage
