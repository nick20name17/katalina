import Image from 'next/image'

import { CreateInvoiceBtn } from '@/components/common/create-invoice-btn'
import { pinyonScript } from '@/lib/fonts'
import { cn } from '@/lib/utils'

const LibraryPage = () => {
  return (
    <>
      <section className='container mt-4'>
        <Image
          className='relative left-1'
          src='/images/library/cover_01.png'
          alt=''
          width={1080}
          height={1080}
        />

        <h1 className={cn(pinyonScript.className, 'mt-4 text-center text-4xl')}>
          The Hidden Digital Library
        </h1>
        <div className='mt-2 space-y-3 px-5 leading-snug'>
          <p className='font-medium'>Бібліотека з більше ніж 2000 якісних актуальних елементів.</p>
          <div className='my-5 border-b'></div>
          <div>
            <p className='text-base'>Що входить:</p>
            <ul className='text-[15px] italic'>
              <li>- стікери; </li>
              <li>- фони; </li>
              <li>- шрифти;</li>
              <li>- рамки</li>
            </ul>
          </div>

          <p>Графічні елементи поділені на папки по сезонам, кольорам та навіть святам.</p>

          <div>
            <p className='text-base'>Для кого:</p>
            <ul className='text-[15px] italic'>
              <li>- креатори; </li>
              <li>- монтажери; </li>
              <li>- сторісмейкери; </li>
              <li>- дизайнери у соцмережах;</li>
              <li>- люди, які люблять вести соцмережі гарно</li>
            </ul>
          </div>
        </div>
      </section>

      <section className='container mt-12'>
        <div className='border-b'></div>
        <h2 className={cn(pinyonScript.className, 'mt-6 text-center text-[32px]')}>
          «The Hidden Digital Library»
        </h2>
        <p className='mt-3 text-center text-[13px]'>
          Місце, в якому з легкістю можна знайти все, щоб створювати красу.
        </p>
        <div className='mt-6 flex flex-col items-center justify-center'>
          <p className='text-lg font-medium'>25$</p>
          <CreateInvoiceBtn
            className='mt-2'
            redirect='library'
            amount={2500}
            comment='Доступ до  «The Hidden Digital Library»'
            destination='Доступ до  «The Hidden Digital Library»'
          />
        </div>
      </section>
      <footer className='mt-16 h-40 w-full'>
        <Image
          className='size-full object-cover'
          src='/images/library/cover_02.jpg'
          alt=''
          width={320}
          height={203}
        />
      </footer>
    </>
  )
}

export default LibraryPage
