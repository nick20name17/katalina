import { Pinyon_Script } from 'next/font/google'
import localFont from 'next/font/local'

export const nightSans = localFont({
  src: '../fonts/NyghtSerif-LightItalic.ttf',
  weight: '300',
  style: 'italic'
})

export const pinyonScript = Pinyon_Script({
  weight: ['400'],
  subsets: ['latin', 'latin-ext']
})
