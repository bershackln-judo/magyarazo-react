import { useState, useEffect, useRef } from 'react'
import { useLang } from '../contexts/LangContext'
import { useSaved } from '../contexts/SavedContext'
import { translateWithDeepL } from '../utils/deepl'

type Direction = 'hu->ru' | 'ru->hu'

interface Props {
  open: boolean
  onClose: () => void
}

export function AddWordForm({ open, onClose }: Props) {
  const { lang, t } = useLang()
  const { addManual } = useSaved()
  const [dir, setDir] = useState<Direction>('hu->ru')
  const [field1, setField1] = useState('')
  const [field2, setField2] = useState('')
  const [translating, setTranslating] = useState(false)
  const field1Ref = useRef<HTMLInputElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const nativeLang = lang === 'uk' ? 'UK' : 'RU'
  const flagNative = lang === 'uk' ? '🇺🇦' : '🇷🇺'

  const labels = dir === 'hu->ru'
    ? {
        l1: t('add_label_hu'),          p1: t('add_placeholder_hu'),
        l2: t('add_label_natlang'),      p2: t('add_placeholder_natlang'),
      }
    : {
        l1: t('add_label_natlang_r'),    p1: t('add_placeholder_natlang_r'),
        l2: t('add_label_hu_r'),         p2: t('add_placeholder_hu_r'),
      }

  // Focus field1 when form opens
  useEffect(() => {
    if (open) setTimeout(() => field1Ref.current?.focus(), 320)
  }, [open])

  // Reset on direction change
  function switchDir(d: Direction) {
    setDir(d)
    setField1('')
    setField2('')
    setTimeout(() => field1Ref.current?.focus(), 50)
  }

  // Auto-translate with debounce
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    if (!field1.trim()) { setField2(''); return }

    timerRef.current = setTimeout(async () => {
      setTranslating(true)
      try {
        const src = dir === 'hu->ru' ? 'HU' : nativeLang
        const tgt = dir === 'hu->ru' ? nativeLang : 'HU'
        const result = await translateWithDeepL(field1, src, tgt)
        if (result) setField2(result)
      } catch { /* silently fail */ }
      finally { setTranslating(false) }
    }, 600)

    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [field1, dir, nativeLang])

  function handleSave() {
    const v1 = field1.trim(), v2 = field2.trim()
    if (!v1 || !v2) return
    const hu = dir === 'hu->ru' ? v1 : v2
    const ru = dir === 'hu->ru' ? v2 : v1
    addManual({ hu, ru, transcription: '', examples: [], manual: true, direction: dir })
    onClose()
    setField1('')
    setField2('')
  }

  if (!open) return null

  return (
    <div className={`dict-form-overlay${open ? ' open' : ''}`} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="dict-form-sheet">
        <div className="dict-form-handle" />
        <div className="dict-form-title">{t('add_form_title')}</div>

        <div className="dict-dir-toggle">
          <button
            className={`dict-dir-btn${dir === 'hu->ru' ? ' active' : ''}`}
            onClick={() => switchDir('hu->ru')}
          >
            <span className="dict-dir-flag">🇭🇺 → {flagNative}</span>
            <span>{t('add_dir_hu2ru')}</span>
          </button>
          <button
            className={`dict-dir-btn${dir === 'ru->hu' ? ' active' : ''}`}
            onClick={() => switchDir('ru->hu')}
          >
            <span className="dict-dir-flag">{flagNative} → 🇭🇺</span>
            <span>{t('add_dir_ru2hu')}</span>
          </button>
        </div>

        <label className="dict-form-label">{labels.l1}</label>
        <input
          ref={field1Ref}
          className="dict-form-input"
          type="text"
          placeholder={labels.p1}
          value={field1}
          onChange={e => setField1(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && field1.trim() && document.getElementById('dict-form-field2')?.focus()}
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
        />

        <label className="dict-form-label">{labels.l2}</label>
        <input
          id="dict-form-field2"
          className="dict-form-input"
          type="text"
          placeholder={translating ? t('translating') : labels.p2}
          value={field2}
          onChange={e => setField2(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && !(!field1.trim() || !field2.trim()) && handleSave()}
          disabled={translating}
          autoComplete="off"
          spellCheck={false}
        />

        <div className="dict-form-actions">
          <button className="dict-form-cancel" onClick={onClose}>{t('add_cancel')}</button>
          <button
            className="dict-form-save"
            onClick={handleSave}
            disabled={!field1.trim() || !field2.trim()}
          >
            {t('add_save')}
          </button>
        </div>
      </div>
    </div>
  )
}
