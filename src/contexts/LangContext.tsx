import { createContext, useContext } from 'react'
import type { AppLang } from '../types'
import type { STRINGS } from '../i18n/strings'

type StringKey = keyof typeof STRINGS['ru']

export interface LangContextValue {
  lang: AppLang
  setLang: (l: AppLang) => void
  t: (key: StringKey) => string
}

export const LangContext = createContext<LangContextValue>({
  lang: 'ru',
  setLang: () => {},
  t: (k) => k as string,
})

export const useLang = () => useContext(LangContext)
