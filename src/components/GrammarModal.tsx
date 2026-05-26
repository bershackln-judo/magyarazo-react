import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useLang } from '../contexts/LangContext'
import { grammarGroups } from '../data/grammar'
import type { GrammarCardData } from '../data/grammar'

interface Props {
  card: GrammarCardData | null
  onClose: () => void
}

export function GrammarModal({ card, onClose }: Props) {
  const { lang, t } = useLang()
  const bodyRef = useRef<HTMLDivElement>(null)
  const [quizState, setQuizState] = useState<'idle' | 'correct' | 'wrong'>('idle')
  const [picked, setPicked] = useState<string | null>(null)
  const [options, setOptions] = useState<string[]>([])

  // Reset + shuffle on every new card
  useEffect(() => {
    if (!card) return
    if (bodyRef.current) bodyRef.current.scrollTop = 0
    setQuizState('idle')
    setPicked(null)
    const shuffled = [...card.quiz.options]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    setOptions(shuffled)
  }, [card])

  // Escape key
  useEffect(() => {
    if (!card) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [card, onClose])

  if (!card) return null

  const group = grammarGroups.find(g => g.index === card.groupIndex)!
  const L = (obj: { ru: string; uk: string }) => lang === 'ru' ? obj.ru : obj.uk

  const handleOption = (opt: string) => {
    if (quizState !== 'idle') return
    setPicked(opt)
    setQuizState(opt === card.quiz.answer ? 'correct' : 'wrong')
  }

  const btnClass = (opt: string) => {
    if (quizState === 'idle') return 'gram-quiz-btn'
    if (opt === card.quiz.answer) return 'gram-quiz-btn correct'
    if (opt === picked) return 'gram-quiz-btn wrong'
    return 'gram-quiz-btn dimmed'
  }

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal gram-modal" onClick={e => e.stopPropagation()}>

        {/* ── Dark header ── */}
        <div className="gram-modal-header">
          <div className="gram-modal-header-left">
            <span className="gram-modal-dot" style={{ background: group.bar }} />
            <span className="gram-modal-num">{String(card.num).padStart(2, '0')}</span>
            <span className="gram-modal-title">{L(card.title)}</span>
          </div>
          <button className="gram-modal-close" onClick={onClose} aria-label="Close">×</button>
        </div>

        {/* ── Scrollable body ── */}
        <div className="gram-modal-body" ref={bodyRef}>

          <div className="gram-modal-suffix">{card.suffix}</div>

          <div className="gram-modal-section-label">{t('gram_rule')}</div>
          <p className="gram-modal-rule">{L(card.rule)}</p>

          {card.hasTip && (
            <div className="gram-tip-box">
              <span className="gram-tip-icon">💡</span>
              <span>{t('gram_tip_harmony')}</span>
            </div>
          )}

          <div className="gram-modal-section-label">{t('gram_examples')}</div>
          <div className="gram-examples">
            {card.examples.map((ex, i) => (
              <div key={i} className="gram-example-row">
                <span className="gram-example-hu">{ex.hu}</span>
                <span className="gram-example-tr">{lang === 'ru' ? ex.ru : ex.uk}</span>
              </div>
            ))}
          </div>

          <div className="gram-modal-section-label">{t('gram_quiz')}</div>
          <p className="gram-quiz-question">{L(card.quiz.question)}</p>
          <div className="gram-quiz-options">
            {options.map(opt => (
              <button key={opt} className={btnClass(opt)} onClick={() => handleOption(opt)}>
                {opt}
              </button>
            ))}
          </div>
          {quizState !== 'idle' && (
            <p className={`gram-quiz-result ${quizState}`}>
              {quizState === 'correct' ? t('gram_correct') : t('gram_wrong')}
            </p>
          )}

        </div>
      </div>
    </div>,
    document.body
  )
}
