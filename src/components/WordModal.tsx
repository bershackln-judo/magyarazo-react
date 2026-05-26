import { useEffect } from 'react'
import type { Verb, Noun, Adjective, SavedWord, AppLang } from '../types'
import { nl } from '../utils/nl'
import { getHungarianForms } from '../utils/hungarian'
import { useLang } from '../contexts/LangContext'
import { useSaved } from '../contexts/SavedContext'

type AnyWord = Verb | Noun | Adjective | SavedWord

interface Props {
  word: AnyWord | null
  onClose: () => void
}

function speak(text: string, lang: string) {
  if (!window.speechSynthesis) return
  window.speechSynthesis.cancel()
  const u = new SpeechSynthesisUtterance(text)
  u.lang = lang
  window.speechSynthesis.speak(u)
}

export function WordModal({ word, onClose }: Props) {
  const { lang, t } = useLang()
  const { isSaved, toggleSave } = useSaved()

  // Close on overlay click
  useEffect(() => {
    if (!word) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [word, onClose])

  if (!word) return null

  const translation = nl(word, lang)
  const saved = isSaved(word.hu)
  const antonym = 'antonym' in word ? (word as Adjective).antonym : undefined
  const hasAntonym = antonym && antonym.trim() && antonym.trim() !== '—' && antonym.trim() !== '— '

  const forms = 'topic' in word && !('antonym' in word)
    ? getHungarianForms(word.hu, lang as AppLang)
    : []

  const handleListen = () => speak(word.hu, 'hu-HU')

  const handleSave = () => {
    const sw: SavedWord = {
      hu: word.hu,
      ru: word.ru,
      uk: word.uk,
      transcription: 'transcription' in word ? (word.transcription as string | undefined) : undefined,
      examples: 'examples' in word ? word.examples : undefined,
      savedAt: Date.now(),
    }
    toggleSave(sw)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-handle" />
        <div className="modal-word">{word.hu}</div>
        <div className="modal-transcription">{'transcription' in word ? word.transcription : ''}</div>
        <div className="modal-translation">{translation}</div>

        {hasAntonym && (
          <div className="modal-antonym">
            {t('antonym_label')}: <span>{antonym}</span>
          </div>
        )}

        {forms.length > 0 && (
          <div className="modal-forms">
            <div className="modal-forms-title">{t('modal_forms_title')}</div>
            <div className="modal-forms-grid">
              {forms.map(f => (
                <div key={f.qKey} className="modal-form-row">
                  <span className="modal-form-label">{t(f.qKey as Parameters<typeof t>[0])}</span>
                  <span className="modal-form-suffix">{f.suffix}</span>
                  <span className="modal-form-value">{f.form}</span>
                  {f.example && <span className="modal-form-example">{f.example}</span>}
                </div>
              ))}
            </div>
          </div>
        )}

        <button className="modal-listen-btn" onClick={handleListen}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1a4 4 0 0 1 4 4v7a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4z"/>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            <line x1="12" y1="19" x2="12" y2="23" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            <line x1="8" y1="23" x2="16" y2="23" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span>{t('listen')}</span>
        </button>

        <div className="modal-divider" />

        <div className="modal-examples-title">{t('modal_examples')}</div>
        <div id="modal-examples">
          {(word.examples ?? []).map((ex, i) => (
            <div key={i} className="modal-example">
              <div className="modal-example-hu">{ex.hu}</div>
              <div className="modal-example-ru">{nl(ex, lang)}</div>
            </div>
          ))}
        </div>

        <button className="modal-save-btn" onClick={handleSave}>
          <svg viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>
          <span>{saved ? t('saved_in_dict') : t('save_to_dict')}</span>
        </button>
      </div>
    </div>
  )
}
