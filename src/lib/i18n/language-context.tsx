'use client'

import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { createContext, useContext, useCallback, type ReactNode } from 'react'
import type { Language } from './translations'

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const langParam = searchParams.get('lang')
  const language: Language = langParam === 'en' ? 'en' : 'ua'

  const setLanguage = useCallback(
    (lang: Language) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set('lang', lang)
      router.replace(`${pathname}?${params.toString()}`, { scroll: false })
    },
    [searchParams, router, pathname]
  )

  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'en' ? 'ua' : 'en')
  }, [language, setLanguage])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
