import Image from 'next/image'
import Link from 'next/link'

import { pinyonScript } from '@/lib/fonts'
import { cn } from '@/lib/utils'

const AdventPage = () => {
  return (
    <>
      <section className='container mt-8'>
        <div className='px-8'>
          <h1 className={cn(pinyonScript.className, 'text-[44px] leading-none')}>Advent Calendar</h1>
          <div>/для креаторів та монтажерів</div>

          <p className='mt-4 text-[13px]'>
            Вирішила, що хочу трішки підняти різдвяний настрій вам, мої любі. З 03.11 по 25.11 заходьте на
            сайт кожного дня та отримуйте свій подаруночок
          </p>
        </div>
      </section>
      <section className='container mt-12 space-y-5 overflow-x-clip [&_a]:transition-transform [&_a]:hover:scale-105 [&_a]:active:scale-105'>
        <div className='mx-auto flex w-fit gap-6 [&_a]:block'>
          <Link
            className='mt-4'
            href='https://striped-coyote-b75.notion.site/Advent-Calendar-for-creators-2bdf155d9ba58008a161d2ba1867053f?source=copy_link'
            target='_blank'
          >
            <Image
              src='/images/advent/cover_01.png'
              width={110}
              height={110}
              alt=''
            />
          </Link>
          <Link
            href='https://striped-coyote-b75.notion.site/Advent-Calendar-2-23-2bef155d9ba58033bf2ce6e6b3885c4f?source=copy_link'
            target='_blank'
          >
            <Image
              src='/images/advent/cover_02.png'
              width={130}
              height={150}
              alt=''
            />
          </Link>
          <div className='active:animate-shake mt-10'>
            <Image
              src='/images/advent/cover_03.jpeg'
              width={110}
              height={110}
              alt=''
            />
          </div>
        </div>
        <div className='flex justify-between gap-6 [&_a]:block'>
          <div className='active:animate-shake mt-4'>
            <Image
              className='w-full'
              src='/images/advent/cover_04.jpeg'
              width={180}
              height={150}
              alt=''
            />
          </div>
          <div className='active:animate-shake rotate-20'>
            <Image
              src='/images/advent/cover_05.png'
              width={65}
              height={65}
              alt=''
            />
          </div>
          <div className='active:animate-shake relative top-5 right-7 -rotate-20'>
            <Image
              src='/images/advent/cover_06.png'
              width={80}
              height={80}
              alt=''
            />
          </div>
        </div>
        <div className='flex justify-between gap-6 [&_a]:block'>
          <div className='active:animate-shake w-full'>
            <Image
              className='w-full'
              src='/images/advent/cover_07.png'
              width={180}
              height={150}
              alt=''
            />
          </div>
          <div className='active:animate-shake mt-6 w-full'>
            <Image
              className='w-full'
              src='/images/advent/cover_08.png'
              width={65}
              height={65}
              alt=''
            />
          </div>
        </div>
        <div className='flex justify-between gap-6 [&_a]:block'>
          <div className='active:animate-shake shrink-0'>
            <Image
              src='/images/advent/cover_10.png'
              width={150}
              height={100}
              alt=''
            />
          </div>
          <div className='active:animate-shake relative top-2 -left-2 shrink-0'>
            <Image
              src='/images/advent/cover_09.png'
              width={80}
              height={80}
              alt=''
            />
          </div>
          <div className='active:animate-shake relative top-9 right-12 mt-6 shrink-0 rotate-10'>
            <Image
              className='w-full'
              src='/images/advent/cover_11.png'
              width={65}
              height={65}
              alt=''
            />
          </div>
        </div>
        <div className='flex justify-between gap-6 [&_a]:block'>
          <div className='active:animate-shake relative -top-7 left-7 shrink-0'>
            <Image
              src='/images/advent/cover_12.png'
              width={160}
              height={100}
              alt=''
            />
          </div>
          <div className='active:animate-shake relative top-10 -left-2 shrink-0'>
            <Image
              src='/images/advent/cover_13.png'
              width={170}
              height={170}
              alt=''
            />
          </div>
        </div>
        <div className='flex justify-between gap-6 [&_a]:block'>
          <div className='active:animate-shake relative left-4 shrink-0'>
            <Image
              src='/images/advent/cover_14.jpeg'
              width={150}
              height={100}
              alt=''
            />
          </div>
          <div className='relative top-12 -left-10'>
            <div className='active:animate-shake relative left-4 shrink-0'>
              <Image
                src='/images/advent/cover_15.png'
                width={160}
                height={160}
                alt=''
              />
            </div>
            <div className='active:animate-shake absolute top-16 -right-4 shrink-0 -rotate-20'>
              <Image
                src='/images/advent/cover_16.png'
                width={65}
                height={65}
                alt=''
              />
            </div>
          </div>
        </div>
        <div className='relative flex justify-between gap-6 [&_a]:block'>
          <div className='active:animate-shake relative left-20 shrink-0 rotate-20'>
            <Image
              src='/images/advent/cover_17.png'
              width={80}
              height={80}
              alt=''
            />
          </div>
          <div className='active:animate-shake relative top-30 right-28 shrink-0 rotate-40'>
            <Image
              src='/images/advent/cover_18.png'
              width={140}
              height={100}
              alt=''
            />
          </div>
          <div className='active:animate-shake relative top-12 -left-20 shrink-0'>
            <Image
              src='/images/advent/cover_19.jpeg'
              width={150}
              height={150}
              alt=''
            />
          </div>
        </div>
        <div className='mt-8 flex justify-between gap-6 [&_a]:block'>
          <div className='active:animate-shake relative top-20 shrink-0 pl-4'>
            <Image
              src='/images/advent/cover_20.jpeg'
              width={250}
              height={200}
              alt=''
            />
          </div>
          <div className='active:animate-shake relative top-24 -left-10 shrink-0 rotate-20'>
            <Image
              src='/images/advent/cover_21.png'
              width={115}
              height={115}
              alt=''
            />
          </div>
          {/* <Link
            className='shrink-0'
            href='/'
          >
            <Image
              src='/images/advent/cover_22.png'
              width={140}
              height={140}
              alt=''
            />
          </Link> */}
        </div>
        <div className='mt-32 flex justify-between gap-6'>
          <p className='relative text-[13px]'>
            А останній подаруночок буде 25.11 в Instagram{' '}
            <Link
              href='https://www.instagram.com/bachu.krasyvo/'
              target='_blank'
            >
              @bachu.krasyvo
            </Link>
          </p>
          <div
            className='active:animate-shake relative right-4 shrink-0'
            // href='/'
          >
            <Image
              src='/images/advent/cover_22.png'
              width={120}
              height={120}
              alt=''
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default AdventPage
