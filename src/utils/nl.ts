import type { AppLang } from '../types'

/** Language-aware translation getter — same logic as vanilla nl() */
export function nl(obj: { ru?: string; uk?: string } | null | undefined, lang: AppLang): string {
  if (!obj) return ''
  return (lang === 'uk' && obj.uk) ? obj.uk : (obj.ru ?? '')
}
