import { useState, useCallback } from 'react'
import type { AppLang } from '../types'
import { STRINGS } from '../i18n/strings'

function readLang(): AppLang {
  const stored = localStorage.getItem('appLang')
  return stored === 'uk' ? 'uk' : 'ru'
}

export function useLanguage() {
  const [lang, setLangState] = useState<AppLang>(readLang)

  const setLang = useCallback((next: AppLang) => {
    localStorage.setItem('appLang', next)
    setLangState(next)
  }, [])

  const t = useCallback(
    (key: keyof typeof STRINGS['ru']) => {
      const s = STRINGS[lang]
      const fallback = STRINGS.ru
      return (key in s ? s[key] : fallback[key]) as string
    },
    [lang],
  )

  return { lang, setLang, t }
}
