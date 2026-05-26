import type { Screen } from '../App'
import { useLang } from '../contexts/LangContext'
import { useSaved } from '../contexts/SavedContext'
import { verbs } from '../data/verbs'
import { nouns } from '../data/nouns'
import { adjectives } from '../data/adjectives'
import { nl } from '../utils/nl'
import { pluralWords } from '../utils/plural'

interface Props {
  onNavigate: (s: Screen) => void
}

export function HomeScreen({ onNavigate }: Props) {
  const { lang, setLang, t } = useLang()
  const { saved } = useSaved()

  const allWords = [...verbs, ...nouns, ...adjectives]
  const total = allWords.length
  const wod = allWords[new Date().getDate() % total]

  function speak() {
    if (!window.speechSynthesis) return
    window.speechSynthesis.cancel()
    const u = new SpeechSynthesisUtterance(wod.hu)
    u.lang = 'hu-HU'
    window.speechSynthesis.speak(u)
  }

  return (
    <section className="screen active" id="screen-home">
      <div className="home-body">

        {/* Top bar */}
        <div className="home-topbar">
          <div className="home-topbar-left">
            <h1 className="home-app-name">Magyarázó</h1>
            <p className="home-tagline">{t('tagline')}</p>
          </div>
          <div className="home-topbar-right">
            <div className="home-dots">
              <span className="home-dot home-dot-red" />
              <span className="home-dot home-dot-yellow" />
              <span className="home-dot home-dot-blue" />
            </div>
            <div className="lang-toggle">
              <button
                className={`lang-btn${lang === 'ru' ? ' active' : ''}`}
                onClick={() => setLang('ru')}
              >РУ</button>
              <button
                className={`lang-btn${lang === 'uk' ? ' active' : ''}`}
                onClick={() => setLang('uk')}
              >УК</button>
            </div>
          </div>
        </div>

        {/* Word of day */}
        <div className="home-wod">
          <div className="home-wod-deco-red" />
          <div className="home-wod-deco-yellow" />
          <div className="home-wod-label">{t('wod_label')}</div>
          <div className="home-wod-hu">{wod.hu}</div>
          <div className="home-wod-transcription">{wod.transcription}</div>
          <div className="home-wod-ru">{nl(wod, lang)}</div>
          <button className="home-wod-listen" onClick={speak}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1a4 4 0 0 1 4 4v7a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4z"/>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
              <line x1="12" y1="19" x2="12" y2="23" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
              <line x1="8" y1="23" x2="16" y2="23" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span>{t('listen')}</span>
          </button>
        </div>

        {/* Module grid */}
        <div className="home-cards">
          <button className="home-card home-card-words" onClick={() => onNavigate('words')}>
            <div className="home-card-icon" style={{background:'rgba(232,76,61,0.12)'}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e84c3d" strokeWidth="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
            </div>
            <span className="home-card-num">01</span>
            <span className="home-card-arrow">→</span>
            <span className="home-card-title">{t('card_words')}</span>
            <span className="home-card-sub">{total} {pluralWords(total, lang)}</span>
          </button>

          <button className="home-card home-card-asst" onClick={() => onNavigate('assistant')}>
            <div className="home-card-icon" style={{background:'rgba(245,200,66,0.2)'}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a07800" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <span className="home-card-num">02</span>
            <span className="home-card-arrow">→</span>
            <span className="home-card-title">{t('card_asst')}</span>
            <span className="home-card-sub">{t('card_asst_sub')}</span>
          </button>

          <button className="home-card home-card-dict" onClick={() => onNavigate('dictionary')}>
            <div className="home-card-icon" style={{background:'rgba(58,110,165,0.12)'}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3a6ea5" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <span className="home-card-num">03</span>
            <span className="home-card-arrow">→</span>
            <span className="home-card-title">{t('card_dict')}</span>
            <span className="home-card-sub">
              {saved.length
                ? (lang === 'uk'
                    ? `У словнику ${saved.length} ${pluralWords(saved.length, lang)}`
                    : `В словаре ${saved.length} ${pluralWords(saved.length, lang)}`)
                : t('card_dict_sub_empty')}
            </span>
          </button>

          <button className="home-card home-card-quiz" onClick={() => onNavigate('quiz' as Screen)}>
            <div className="home-card-icon" style={{background:'rgba(42,157,92,0.12)'}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2a9d5c" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2"/>
                <path d="M8 21h8M12 17v4"/>
              </svg>
            </div>
            <span className="home-card-num">04</span>
            <span className="home-card-arrow">→</span>
            <span className="home-card-title">{t('card_flash')}</span>
            <span className="home-card-sub">{t('card_flash_sub')}</span>
          </button>
        </div>

        {saved.length > 0 && (
          <p className="home-dict-info">
            {lang === 'uk'
              ? `У словнику ${saved.length} ${pluralWords(saved.length, lang)}`
              : `В словаре ${saved.length} ${pluralWords(saved.length, lang)}`
            }
          </p>
        )}
      </div>
    </section>
  )
}
