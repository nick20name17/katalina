import Image from 'next/image'
import Link from 'next/link'

import { CreateInvoiceBtn } from '@/components/common/create-invoice-btn'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { pinyonScript } from '@/lib/fonts'
import { cn } from '@/lib/utils'

const PinterestPage = () => {
  return (
    <>
      <section className='relative container px-2'>
        <Image
          src='/images/cover_10.jpg'
          width={1080}
          height={1080}
          alt='Collage'
          priority
        />
        <div className='absolute top-24 left-1/2 flex h-46 w-3/4 -translate-x-1/2 flex-col justify-end bg-[#FFFCF0]/90 p-6'>
          <h1 className='flex items-center justify-between text-xl font-medium uppercase'>
            <span>Pinterest</span> <span>Guide</span>
          </h1>
          <p className='mt-8 text-[13px]'>
            Тут зібрано все, що тобі потрібно знати про просування на Pinterest.
          </p>
        </div>
      </section>

      <section className='container mt-12 px-8'>
        <h2 className='uper max-w-80 text-[17px] font-medium'>
          Чому Pinterest — це ідеальна соцмережа для просування
        </h2>
        <ul className='mt-6 space-y-2 text-[15px] leading-relaxed'>
          <li>- Відсутність конкуренції — українці поки що недооцінюють цю платформу.</li>
          <li>
            - На відміну від інших соцмереж, контент може давати охоплення в середньому протягом 13 місяців і
            навіть до декількох років.
          </li>
          <li>- Не потрібно мати багато підписників, лайків чи коментарів.</li>
          <li>- Ви завжди потрапляєте в рекомендації.</li>
          <li>- Не обов’язково знімати чи фотографувати себе.</li>
          <li>- Навіть з одного поста можна зробити щонайменше три публікації в різних форматах.</li>
          <li>
            - Є можливість перенаправляти трафік на інші платформи. Постійний потік клієнтів та підписників.
          </li>
        </ul>

        <div className='mt-8 flex items-center justify-center'>
          <Link href='/pinterest/#guide'>
            <Button
              className='w-64 uppercase'
              variant='outline'
            >
              Придбати гайд
            </Button>
          </Link>
        </div>
      </section>

      <div className='container'>
        <div className='mt-8 border-b'></div>
      </div>

      <section className='mt-6'>
        <div className='flex overflow-x-hidden pl-8'>
          <Image
            className='relative -left-8'
            src='/images/cover_11.jpg'
            width={1080}
            height={1080}
            alt='Flower'
          />
          <Image
            className='relative right-[15%]'
            src='/images/cover_13.jpg'
            width={1080}
            height={1080}
            alt='Flower'
          />
        </div>
        <div className='container px-8'>
          <h2 className='text-[17px] font-medium uppercase'>
            МОЯ СТАТИСТИКА ЗА 30 ДНІВ ВЕДЕННЯ PINTEREST З НУЛЯ
          </h2>
          <p className='mt-6 text-[15px] leading-relaxed'>
            Я провела експеримент, за яким спостерігали підписники в Threads. Тестувала все, що знаходила на
            просторах інтернету, і збирала тільки те, що реально працює. Пережила блокування акаунту, нульові
            охоплення та заблоковані піни. Наразі моя статистика лише зростає: клієнти приходять із
            посиланнями та скрінами з Pinterest — «Зробіть так само».
          </p>
          <p className='mt-6 text-[15px] leading-relaxed font-medium'>
            Тому все, що є у файлі, працює! Це не випадковість і не удача — це система.
          </p>
        </div>
      </section>

      <div className='container'>
        <div className='mt-8 border-b'></div>
      </div>

      <section className='mt-8'>
        <Image
          src='/images/cover_14.jpg'
          width={1080}
          height={1080}
          alt='Contents'
        />

        <div className='container mt-4 px-8'>
          <h2 className='text-[17px] font-medium uppercase'>Що входить у гайд?</h2>
          <p className='mt-1 text-[13px]'>
            14 розділів, 28 сторінок, тільки теоретична інформація з прикладами та інструкціями
          </p>

          <PinterestTopics />
          <div className='mt-8 font-medium'>
            <span className='uppercase'>Додатково: </span> подкаст від мене «Як не закинути ведення Pinterest»
          </div>
        </div>
      </section>

      <section
        className='mt-8 scroll-mt-24'
        id='guide'
      >
        <Image
          src='/images/cover_15.jpg'
          width={1080}
          height={1080}
          alt='Flower'
        />

        <div className='container mt-12'>
          <div className='border-b'></div>
          <h2 className={cn(pinyonScript.className, 'mt-6 text-center text-[32px]')}>
            «Pinterest Guide for Creators»
          </h2>
          <p className='mt-3 text-center text-[13px]'>
            Слідуючи правилам цього гайду, крок за кроком ви побудуєте постійний потік підписників та
            клієнтів.
          </p>
          <div className='mt-6 flex flex-col items-center justify-center'>
            <p className='text-lg font-medium'>1600 грн</p>
            <CreateInvoiceBtn
              className='mt-3'
              redirect='pinterest'
              amount={160000}
              comment='Доступ до телеграм спільноти'
              destination='Доступ до телеграм спільноти'
            />
          </div>
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
            <AccordionTrigger className='text-balance'>Коли я отримаю гайд?</AccordionTrigger>
            <AccordionContent>Після оплати гайд відразу буде скачаний на ваш пристрій.</AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-2'>
            <AccordionTrigger>У якому форматі гайд?</AccordionTrigger>
            <AccordionContent>У зручному PDF форматі з посиланнями на додатки всередині</AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-3'>
            <AccordionTrigger>Чи є зворотній звʼязок?</AccordionTrigger>
            <AccordionContent>Так, ви можете поставити додаткові питання в діректі.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <footer className='mt-8'>
        <Image
          src='/images/cover_16.jpg'
          width={2000}
          height={1200}
          alt='Flower'
        />
      </footer>
    </>
  )
}

const PinterestTopics = () => {
  const topics = [
    'Чому Pinterest — це ідеальна соцмережа для просування зараз',
    'Як працюють алгоритми Pinterest',
    'З чого почати: три важливих кроки + файл з прикладами',
    'Найважливіші метрики',
    'Коли і як часто публікувати контент',
    'Чеклист: «Пін, який залітає»',
    'SEO оптимізація: як зробити так, щоб алгоритми вас просували',
    'CTA (Call to Action): як переводити трафік у інші соцмережі',
    'Як скоротити час на створення контенту: упаковка акаунта + шаблон',
    'Як з одного поста зробити 10 форматів пінів: матриця контенту + файл',
    'Тренди та сезонний контент + 2 файли-шпаргалки',
    'Контент воронки: прокладаємо шлях користувача + воронка, яку я використовую найчастіше',
    'Як не потрапити в тіньовий бан / не отримати блокування',
    'Що робити якщо заблокували аккаунт? (загальна послідовність дій + мій досвід)'
  ]

  return (
    <ul className='mt-6 text-[15px] leading-relaxed'>
      {topics.map((topic, index) => (
        <li
          key={index}
          style={{ marginBottom: '8px' }}
        >
          <div className='font-medium'>{`(${String(index + 1).padStart(2, '0')})`}</div> {topic}
        </li>
      ))}
    </ul>
  )
}

export default PinterestPage
