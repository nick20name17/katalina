'use client'

import { useLanguage } from '@/lib/i18n/language-context'
import { cn } from '@/lib/utils'

export function LanguageToggle({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage()

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border border-neutral-200 bg-white/80 p-0.5 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/80',
        className
      )}
    >
      <button
        onClick={() => setLanguage('ua')}
        className={cn(
          'relative rounded-full px-3 py-1.5 text-xs font-medium tracking-wide transition-all duration-300',
          language === 'ua'
            ? 'bg-neutral-900 text-white shadow-sm dark:bg-white dark:text-neutral-900'
            : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
        )}
      >
        UA
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={cn(
          'relative rounded-full px-3 py-1.5 text-xs font-medium tracking-wide transition-all duration-300',
          language === 'en'
            ? 'bg-neutral-900 text-white shadow-sm dark:bg-white dark:text-neutral-900'
            : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
        )}
      >
        EN
      </button>
    </div>
  )
}
