import { useState, useMemo, useRef } from 'react'
import type { SavedWord } from '../types'
import { useLang } from '../contexts/LangContext'
import { useSaved } from '../contexts/SavedContext'
import { WordModal } from '../components/WordModal'
import { AddWordForm } from '../components/AddWordForm'
import { nl } from '../utils/nl'
import { pluralWords } from '../utils/plural'
import { verbs } from '../data/verbs'
import { adjectives } from '../data/adjectives'

type SortOrder = 'date' | 'alpha'
type WordType = 'verb' | 'noun' | 'adj' | 'manual'
const TYPE_ORDER: WordType[] = ['verb', 'noun', 'adj', 'manual']

function getWordType(word: SavedWord): WordType {
  if (word.manual) return 'manual'
  if (verbs.some(v => v.hu === word.hu)) return 'verb'
  if (adjectives.some(a => a.hu === word.hu)) return 'adj'
  return 'noun'
}

function formatDate(ts: number): string {
  return new Date(ts).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' })
}

function speak(text: string) {
  if (!window.speechSynthesis) return
  window.speechSynthesis.cancel()
  const u = new SpeechSynthesisUtterance(text)
  u.lang = 'hu-HU'; u.rate = 0.85
  window.speechSynthesis.speak(u)
}

export function DictionaryScreen() {
  const { lang, t } = useLang()
  const { saved, removeWord, clearAll, importWords } = useSaved()
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState<SortOrder>('date')
  const [modal, setModal] = useState<SavedWord | null>(null)
  const [addOpen, setAddOpen] = useState(false)
  const importRef = useRef<HTMLInputElement>(null)

  const nativeFlag = lang === 'uk' ? '🇺🇦' : '🇷🇺'

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return saved.filter(w =>
      !q ||
      w.hu.toLowerCase().includes(q) ||
      w.ru.toLowerCase().includes(q) ||
      (w.uk && w.uk.toLowerCase().includes(q))
    )
  }, [saved, query])

  const grouped = useMemo(() => {
    const sortFn: (a: SavedWord, b: SavedWord) => number =
      sort === 'alpha'
        ? (a, b) => (a.direction === 'ru->hu' ? nl(a, lang) : a.hu)
            .localeCompare(b.direction === 'ru->hu' ? nl(b, lang) : b.hu, lang)
        : (a, b) => (b.savedAt ?? 0) - (a.savedAt ?? 0)

    const groups: Partial<Record<WordType, SavedWord[]>> = {}
    filtered.forEach(w => {
      const type = getWordType(w)
      if (!groups[type]) groups[type] = []
      groups[type]!.push(w)
    })
    TYPE_ORDER.forEach(type => groups[type]?.sort(sortFn))
    return groups
  }, [filtered, sort, lang])

  const typeLabels: Record<WordType, string> = {
    verb:   t('dict_group_verb'),
    noun:   t('dict_group_noun'),
    adj:    t('dict_group_adj'),
    manual: t('dict_group_manual'),
  }

  function handleExport() {
    if (!saved.length) return
    const blob = new Blob([JSON.stringify(saved, null, 2)], { type: 'application/json' })
    const url  = URL.createObjectURL(blob)
    const a    = document.createElement('a')
    a.href     = url
    a.download = `magyarazo-${new Date().toLocaleDateString('ru-RU').replace(/\./g, '-')}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  function handleImport(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = ev => {
      try {
        const imported = JSON.parse(ev.target?.result as string)
        if (!Array.isArray(imported)) throw new Error()
        const existing = new Set(saved.map(w => w.hu))
        const newWords = (imported as SavedWord[]).filter(w => w.hu && !existing.has(w.hu))
        if (!newWords.length) { alert(lang === 'uk' ? 'Всі слова вже є у словнику.' : 'Все слова уже есть в словаре.'); return }
        importWords([...newWords, ...saved])
        alert(`${lang === 'uk' ? 'Додано' : 'Добавлено'} ${newWords.length} ${pluralWords(newWords.length, lang)}.`)
      } catch {
        alert(lang === 'uk' ? 'Помилка: невірний формат файлу.' : 'Ошибка: неверный формат файла.')
      }
      e.target.value = ''
    }
    reader.readAsText(file)
  }

  function handleClear() {
    if (confirm(lang === 'uk' ? 'Видалити всі збережені слова?' : 'Удалить все сохранённые слова?')) {
      clearAll()
    }
  }

  return (
    <section className="screen active" id="screen-dictionary">
      <div className="dict-header">
        <div className="dict-title-row">
          <h1>{t('dict_title')}</h1>
          {saved.length > 0 && (
            <span className="dict-count">
              {saved.length} {pluralWords(saved.length, lang)}
            </span>
          )}
        </div>
        <input
          className="search-input"
          type="search"
          placeholder={t('dict_search')}
          value={query}
          onChange={e => setQuery(e.target.value)}
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          style={{ marginTop: 10 }}
        />
        <div className="dict-sort-tabs">
          <button
            className={`dict-sort-btn${sort === 'date' ? ' active' : ''}`}
            onClick={() => setSort('date')}
          >{t('sort_date')}</button>
          <button
            className={`dict-sort-btn${sort === 'alpha' ? ' active' : ''}`}
            onClick={() => setSort('alpha')}
          >{t('sort_alpha')}</button>
        </div>
      </div>

      {/* Word list */}
      <div className="dict-list">
        {saved.length === 0 ? (
          <div className="dict-empty">
            <span className="dict-empty-icon">♡</span>
            <p>{t('dict_empty')}</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="no-results">{t('dict_no_results')}</div>
        ) : (
          TYPE_ORDER.map(type => {
            const group = grouped[type]
            if (!group?.length) return null
            return (
              <div key={type}>
                <div className="dict-group-header">{typeLabels[type]}</div>
                {group.map(word => (
                  <div
                    key={`${word.hu}-${word.savedAt}`}
                    className="dict-item"
                    onClick={() => setModal(word)}
                  >
                    <div className="dict-item-info">
                      <span className="dict-item-hu">
                        {word.direction === 'ru->hu' ? nl(word, lang) : word.hu}
                      </span>
                      <span className="dict-item-ru">
                        {word.direction === 'ru->hu' ? word.hu : nl(word, lang)}
                      </span>
                      <div style={{ display:'flex', alignItems:'center', gap:6, marginTop:3, flexWrap:'wrap' }}>
                        {word.savedAt ? <span className="dict-item-date">{formatDate(word.savedAt)}</span> : null}
                        {word.manual && (
                          <span className="dict-dir-badge">
                            {word.direction === 'ru->hu'
                              ? `${nativeFlag} → 🇭🇺`
                              : `🇭🇺 → ${nativeFlag}`}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="dict-item-actions">
                      <button
                        className="dict-action-btn dict-listen-btn"
                        onClick={e => { e.stopPropagation(); speak(word.hu) }}
                        aria-label="Послушать"
                      >
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 1a4 4 0 0 1 4 4v7a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4z"/>
                          <path d="M19 10v2a7 7 0 0 1-14 0v-2" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round"/>
                          <line x1="12" y1="19" x2="12" y2="23" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round"/>
                          <line x1="8"  y1="23" x2="16" y2="23" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </button>
                      <button
                        className="dict-action-btn dict-delete-btn"
                        onClick={e => { e.stopPropagation(); removeWord(word.hu) }}
                        aria-label="Удалить"
                      >
                        <svg viewBox="0 0 24 24">
                          <polyline points="3 6 5 6 21 6"/>
                          <path d="M19 6l-1 14H6L5 6"/>
                          <path d="M10 11v6M14 11v6"/>
                          <path d="M9 6V4h6v2"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )
          })
        )}
      </div>

      {/* Add button */}
      <div className="dict-add-wrap">
        <button className="dict-add-btn" onClick={() => setAddOpen(true)}>
          <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          <span>{t('add_word')}</span>
        </button>
      </div>

      {/* Footer (export/import/clear) */}
      {saved.length > 0 && (
        <div className="dict-footer">
          <div className="dict-footer-actions">
            <button className="dict-export-btn" onClick={handleExport}>
              <svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              <span>{t('export_btn')}</span>
            </button>
            <button className="dict-import-btn" onClick={() => importRef.current?.click()}>
              <svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
              <span>{t('import_btn')}</span>
            </button>
          </div>
          <button className="dict-clear-btn" onClick={handleClear}>{t('clear_all')}</button>
        </div>
      )}

      <input ref={importRef} type="file" accept=".json" style={{ display:'none' }} onChange={handleImport} />

      {/* Modal */}
      <WordModal word={modal} onClose={() => setModal(null)} />

      {/* Add form */}
      <AddWordForm open={addOpen} onClose={() => setAddOpen(false)} />
    </section>
  )
}
