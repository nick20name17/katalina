// import { Metadata } from 'next'
// import Image from 'next/image'
// import Link from 'next/link'

// import { SocialMediaFooter } from './components/footer'
// import { SocialMediaHeader } from './components/header'
// import { Button } from '@/components/ui/button'

// export const metadata: Metadata = {
//   title: 'Social Media',
//   description: 'Доєднуйся до моїх соціальних мереж'
// }

// const SocialMediaPage = () => {
//   return (
//     <>
//       <SocialMediaHeader />
//       <section className='mt-4'>
//         <div className='relative mx-auto h-80'>
//           <Image
//             priority
//             className='size-full max-w-full object-cover object-top'
//             src='/images/cover_07.jpg'
//             alt='Flower'
//             width={1200}
//             height={630}
//           />
//           {/* <div className='text-background absolute top-6 left-4 text-xs'>@bachu.krasyvo</div> */}
//           <div className='text-background absolute right-4 bottom-6 max-w-40 text-right text-xs'>
//             мої очі бачать красиво. твої також.
//           </div>
//         </div>
//         <div className='overflow-clip'>
//           <Image
//             className='relative scale-115'
//             src='/images/img_01.png'
//             alt=''
//             width={1200}
//             height={630}
//           />
//         </div>

//         <div className='relative container mt-4 flex items-start justify-center gap-4'>
//           <div className='absolute top-4 left-1/2 h-40 w-20 -translate-x-1/2 bg-[#FFFCF0]/80'></div>

//           <div className='w-full max-w-50 space-y-4'>
//             <h3 className='text-sm'>(01)</h3>
//             <div className='aspect-square w-full bg-gray-200'>
//               <Image
//                 src='/images/cover_08.jpg'
//                 alt=''
//                 width={200}
//                 height={200}
//               />
//             </div>
//             <p className='text-sm'>Закрита начальна спільнота для монтажерок.</p>
//             <Link href='/#community'>
//               <Button
//                 className='uppercase'
//                 variant='outline'
//               >
//                 Доєднатися
//               </Button>
//             </Link>
//           </div>

//           <div className='w-full max-w-50 space-y-4'>
//             <h3 className='text-sm'>(02)</h3>
//             <div className='aspect-square w-full bg-gray-200'>
//               <Image
//                 src='/images/cover_09.jpg'
//                 alt=''
//                 width={200}
//                 height={200}
//               />
//             </div>
//             <p className='text-sm'>Безкоштовний простір з безліччю ідей для твоїх відео.</p>
//             <Link
//               href='https://t.me/ideaflowergarden'
//               target='_blank'
//             >
//               <Button
//                 className='uppercase'
//                 variant='outline'
//               >
//                 Доєднатися
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>
//       <section className='relative container mt-16 flex flex-col items-center justify-center gap-8'>
//         <h3 className='absolute top-28 left-10 text-sm'>(03)</h3>

//         <video
//           className='w-[55%]'
//           autoPlay
//           muted
//           loop
//           controls={false}
//           playsInline
//         >
//           <source src='/video/video_01.mov' />
//         </video>
//         <div className='space-y-4 text-center'>
//           <p className='text-sm text-pretty'>
//             Слухай мій подкаст «Квітни», у якому я обговорюю монтаж, особистий бренд та доходи.
//           </p>
//           <Link
//             href='https://www.patreon.com/bachukrasyvo?utm_campaign=creatorshare_creator'
//             target='_blank'
//           >
//             <Button
//               className='uppercase'
//               variant='outline'
//             >
//               Послухати
//             </Button>
//           </Link>
//         </div>
//       </section>
//       <SocialMediaFooter />
//     </>
//   )

// }

// export default SocialMediaPage
