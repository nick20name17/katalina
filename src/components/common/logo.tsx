import Link from 'next/link'

import { pinyonScript } from '@/lib/fonts'
import { cn } from '@/lib/utils'

export const Logo = () => {
  return (
    <Link
      className={cn(pinyonScript.className, 'text-3xl leading-none')}
      href='/'
    >
      Bachu Krasyvo
    </Link>
  )
}
