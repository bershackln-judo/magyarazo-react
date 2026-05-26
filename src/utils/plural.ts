import type { AppLang } from '../types'

/** Russian plural form for "слово/слова/слов" */
export function pluralWordsRu(n: number): string {
  const mod10 = n % 10, mod100 = n % 100
  if (mod10 === 1 && mod100 !== 11) return 'слово'
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return 'слова'
  return 'слов'
}

/** Ukrainian plural form for "слово/слова/слів" */
export function pluralWordsUk(n: number): string {
  const mod10 = n % 10, mod100 = n % 100
  if (mod100 >= 11 && mod100 <= 19) return 'слів'
  if (mod10 === 1) return 'слово'
  if (mod10 >= 2 && mod10 <= 4) return 'слова'
  return 'слів'
}

/** Pick the right plural function based on lang */
export function pluralWords(n: number, lang: AppLang): string {
  return lang === 'uk' ? pluralWordsUk(n) : pluralWordsRu(n)
}
