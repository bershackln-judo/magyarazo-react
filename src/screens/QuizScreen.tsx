import { useState, useCallback } from 'react'
import type { Verb, Noun, Adjective, SavedWord } from '../types'
import { verbs } from '../data/verbs'
import { nouns } from '../data/nouns'
import { adjectives } from '../data/adjectives'
import { useLang } from '../contexts/LangContext'
import { useSaved } from '../contexts/SavedContext'
import { nl } from '../utils/nl'
import { pluralWords } from '../utils/plural'

type QuizMode   = 'builtin' | 'saved' | 'all'
type QuizSource = 'verbs' | 'nouns' | 'adj'
type QuizDir    = 'hu->ru' | 'ru->hu'
type Panel      = 'start' | 'card' | 'finish'

type AnyWord = Verb | Noun | Adjective | SavedWord

interface Option { text: string; isCorrect: boolean }

interface Props { onBack: () => void }

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function speak(text: string, lang: string) {
  if (!window.speechSynthesis) return
  window.speechSynthesis.cancel()
  const u = new SpeechSynthesisUtterance(text)
  u.lang = lang; u.rate = 0.85
  window.speechSynthesis.speak(u)
}

export function QuizScreen({ onBack }: Props) {
  const { lang, t } = useLang()
  const { saved } = useSaved()

  // ── Start panel state ──────────────────────────────────────────────────────
  const [mode, setMode]     = useState<QuizMode>('builtin')
  const [source, setSource] = useState<QuizSource>('verbs')
  const [dir, setDir]       = useState<QuizDir>('hu->ru')

  // ── Quiz state ─────────────────────────────────────────────────────────────
  const [panel, setPanel]   = useState<Panel>('start')
  const [deck, setDeck]     = useState<AnyWord[]>([])
  const [current, setCurrent] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [wrong, setWrong]   = useState<AnyWord[]>([])
  const [options, setOptions] = useState<Option[]>([])
  const [answered, setAnswered] = useState(false)
  const [chosenIdx, setChosenIdx] = useState<number | null>(null)

  const nativeLang = lang === 'uk' ? 'uk-UA' : 'ru-RU'

  // ── Counts for start panel ─────────────────────────────────────────────────
  const builtinCount = verbs.length + nouns.length + adjectives.length
  const savedCount   = saved.length
  const allCount     = builtinCount + savedCount
  const sourceCount  = source === 'verbs' ? verbs.length : source === 'nouns' ? nouns.length : adjectives.length

  // ── Build deck ─────────────────────────────────────────────────────────────
  function buildDeck(m: QuizMode, s: QuizSource): AnyWord[] {
    if (m === 'saved') return saved.slice()
    if (m === 'all')   return shuffle([...verbs, ...nouns, ...adjectives, ...saved])
    if (s === 'nouns') return nouns.slice()
    if (s === 'adj')   return adjectives.slice()
    return verbs.slice()
  }

  // ── Build options ──────────────────────────────────────────────────────────
  const buildOptions = useCallback((d: AnyWord[], idx: number, quizDir: QuizDir): Option[] => {
    const word        = d[idx]
    const isHuRu      = quizDir === 'hu->ru'
    const correctText = isHuRu ? (nl(word, lang) || word.hu) : word.hu
    const pool        = d.filter((_, i) => i !== idx)
    const wrongs      = shuffle(pool).slice(0, 3).map(w => isHuRu ? (nl(w, lang) || w.hu) : w.hu)
    const unique      = [...new Set(wrongs)].filter(t => t !== correctText).slice(0, 3)
    while (unique.length < 3) unique.push('—')
    return shuffle([
      { text: correctText, isCorrect: true },
      ...unique.map(text => ({ text, isCorrect: false })),
    ])
  }, [lang])

  // ── Start ──────────────────────────────────────────────────────────────────
  function startQuiz(words: AnyWord[]) {
    if (!words.length) { alert(t('quiz_empty_saved')); return }
    const d = shuffle(words)
    setDeck(d)
    setCurrent(0)
    setCorrect(0)
    setWrong([])
    setAnswered(false)
    setChosenIdx(null)
    setOptions(buildOptions(d, 0, dir))
    setPanel('card')
  }

  // ── Select option ──────────────────────────────────────────────────────────
  function selectOption(idx: number) {
    if (answered) return
    setAnswered(true)
    setChosenIdx(idx)

    const chosen = options[idx]
    const isLast = current + 1 >= deck.length

    if (chosen.isCorrect) {
      setCorrect(c => c + 1)
    } else {
      setWrong(w => [...w, deck[current]])
    }

    setTimeout(() => {
      if (isLast) {
        setPanel('finish')
      } else {
        const next = current + 1
        setCurrent(next)
        setAnswered(false)
        setChosenIdx(null)
        setOptions(buildOptions(deck, next, dir))
      }
    }, chosen.isCorrect ? 600 : 1200)
  }

  // ── Retry / restart ────────────────────────────────────────────────────────
  function retry()   { startQuiz(wrong) }
  function restart() { startQuiz(buildDeck(mode, source)) }

  // ── Current word info ──────────────────────────────────────────────────────
  const word       = deck[current]
  const isHuRu     = dir === 'hu->ru'
  const question   = word ? (isHuRu ? word.hu : (nl(word, lang) || word.hu)) : ''
  const hint       = word && isHuRu && word.transcription ? word.transcription : ''
  const pct        = deck.length ? Math.round((correct / deck.length) * 100) : 0

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <section className="screen active" id="screen-quiz">

      {/* ── START PANEL ── */}
      {panel === 'start' && (
        <div className="quiz-panel quiz-panel-active" id="quiz-start-panel">
          <div className="quiz-start-header">
            <button className="quiz-back-btn" onClick={onBack}>{t('quiz_back')}</button>
            <h1 className="quiz-title">{t('quiz_title')}</h1>
          </div>
          <div className="quiz-start-body">
            <p className="quiz-subtitle">{t('quiz_what')}</p>

            {/* Mode tiles */}
            <div className="quiz-mode-tiles">
              {(['builtin', 'saved', 'all'] as QuizMode[]).map(m => (
                <button
                  key={m}
                  className={`quiz-mode-tile${m === 'all' ? ' quiz-mode-tile-full' : ''}${mode === m ? ' active' : ''}`}
                  onClick={() => setMode(m)}
                >
                  <span className="quiz-mode-icon">
                    {m === 'builtin' ? '📖' : m === 'saved' ? '📚' : '🔀'}
                  </span>
                  <span className="quiz-mode-name">
                    {t(m === 'builtin' ? 'mode_builtin' : m === 'saved' ? 'mode_saved' : 'mode_all')}
                  </span>
                  <span className="quiz-mode-sub">
                    {m === 'builtin'
                      ? t('quiz_n_words').replace ? `${builtinCount} ${pluralWords(builtinCount, lang)}` : String(builtinCount)
                      : m === 'saved'
                        ? savedCount ? `${savedCount} ${pluralWords(savedCount, lang)}` : t('quiz_empty')
                        : `${allCount} ${pluralWords(allCount, lang)}`}
                  </span>
                </button>
              ))}
            </div>

            {/* Source type (only for builtin) */}
            {mode === 'builtin' && (
              <div className="quiz-type-row" id="quiz-type-row">
                {(['verbs', 'nouns', 'adj'] as QuizSource[]).map(s => (
                  <button
                    key={s}
                    className={`quiz-type-btn${source === s ? ' active' : ''}`}
                    onClick={() => setSource(s)}
                  >
                    <span>{t(s === 'verbs' ? 'tab_verbs' : s === 'nouns' ? 'tab_nouns' : 'tab_adj')}</span>
                    <span> {sourceCount}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Direction */}
            <div className="quiz-dir-toggle">
              <button
                className={`quiz-dir-btn${dir === 'hu->ru' ? ' active' : ''}`}
                onClick={() => setDir('hu->ru')}
              >{t('dir_hu_ru')}</button>
              <button
                className={`quiz-dir-btn${dir === 'ru->hu' ? ' active' : ''}`}
                onClick={() => setDir('ru->hu')}
              >{t('dir_ru_hu')}</button>
            </div>

            <button
              className="quiz-start-btn"
              onClick={() => startQuiz(buildDeck(mode, source))}
            >{t('quiz_start')}</button>
          </div>
        </div>
      )}

      {/* ── CARD PANEL ── */}
      {panel === 'card' && word && (
        <div className="quiz-panel quiz-panel-active" id="quiz-card-panel">
          <div className="quiz-card-topbar">
            <button className="quiz-back-btn" onClick={onBack}>{t('quiz_exit')}</button>
            <div className="quiz-counter">{current + 1} / {deck.length}</div>
          </div>

          <div className="quiz-progress-bar">
            <div className="quiz-progress-fill" style={{ width: `${(current / deck.length) * 100}%` }} />
          </div>

          <div className="quiz-question-wrap">
            <div className="quiz-question-label">{question}</div>
            <button
              className="quiz-listen-btn"
              onClick={() => speak(isHuRu ? word.hu : (nl(word, lang) || word.hu), isHuRu ? 'hu-HU' : nativeLang)}
              title="Послушать"
            >
              <svg viewBox="0 0 24 24">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
              </svg>
            </button>
            {hint && <div className="quiz-transcription-hint">{hint}</div>}
          </div>

          <div className="quiz-options" id="quiz-options">
            {options.map((opt, i) => {
              let cls = 'quiz-option-btn'
              if (answered && chosenIdx !== null) {
                if (i === chosenIdx && opt.isCorrect)  cls += ' quiz-option-correct'
                if (i === chosenIdx && !opt.isCorrect) cls += ' quiz-option-wrong'
                if (i !== chosenIdx && opt.isCorrect)  cls += ' quiz-option-correct'
              }
              return (
                <button
                  key={i}
                  className={cls}
                  data-idx={i}
                  disabled={answered}
                  onClick={() => selectOption(i)}
                >
                  {opt.text}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* ── FINISH PANEL ── */}
      {panel === 'finish' && (
        <div className="quiz-panel quiz-panel-active" id="quiz-finish-panel">
          <div className="quiz-start-inner">
            <div
              className="quiz-score-circle"
              data-good={pct >= 70 ? '1' : '0'}
            >{pct}%</div>
            <p
              className="quiz-score-label"
              dangerouslySetInnerHTML={{
                __html: `<strong>${correct}</strong> ${lang === 'uk' ? 'з' : 'из'} ${deck.length} ${lang === 'uk' ? 'правильно' : 'правильно'}`
              }}
            />
            {wrong.length > 0 && (
              <button className="quiz-retry-btn" onClick={retry}>{t('quiz_retry')}</button>
            )}
            <button className="quiz-start-btn" onClick={restart}>{t('quiz_restart')}</button>
            <button className="quiz-back-btn" onClick={onBack}>{t('quiz_back_finish')}</button>
          </div>
        </div>
      )}
    </section>
  )
}
