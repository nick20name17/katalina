import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className='relative mt-16 h-40 w-full'>
      <div className='absolute -top-10 left-1/2 h-35 w-70 -translate-x-1/2 bg-[#FFFCF0]/80'></div>

      <Image
        className='size-full object-cover'
        src='/images/cover_05.jpg'
        alt=''
        width={320}
        height={203}
      />
    </footer>
  )
}
