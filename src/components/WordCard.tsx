import type { Verb, Noun, Adjective, AppLang } from '../types'
import { nl } from '../utils/nl'

type AnyWord = Verb | Noun | Adjective

interface Props {
  word: AnyWord
  lang: AppLang
  onClick: (word: AnyWord) => void
}

export function WordCard({ word, lang, onClick }: Props) {
  return (
    <div className="verb-card" onClick={() => onClick(word)}>
      <div className="verb-card-left">
        <span className="verb-hu">{word.hu}</span>
        <span className="verb-ru">{nl(word, lang)}</span>
      </div>
      <span className="verb-arrow">›</span>
    </div>
  )
}
