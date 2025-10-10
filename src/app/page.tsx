import Image from 'next/image'

import { nightSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'

const HomePage = () => {
  return (
    <>
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
      </section>

      <section className='relative z-10 container mt-16'>
        <h2 className='mx-auto flex w-fit flex-col gap-1'>
          <span className={cn(nightSans.className, 'text-3xl')}>(ця спільнота для тебе)</span>
          <span className='text-right'>якщо ти хочеш:</span>
        </h2>

        <ul className='mt-5 space-y-5 text-sm'>
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

      <section className='relative -mt-6'>
        <h2 className='hidden'>Bachu Krasyvo</h2>
        <Image
          className='mx-auto'
          src='/images/cover_04.jpg'
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

        <ul className='mt-5 space-y-5 text-sm'>
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
            <p>Ресурси, які я використовую сама і всім</p>
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
    </>
  )
}

export default HomePage
