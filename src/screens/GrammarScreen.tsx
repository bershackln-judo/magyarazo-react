import { useState } from 'react'
import { useLang } from '../contexts/LangContext'
import { grammarGroups, grammarCards } from '../data/grammar'
import { GrammarModal } from '../components/GrammarModal'
import type { GrammarCardData } from '../data/grammar'

export function GrammarScreen() {
  const { lang } = useLang()
  const [selected, setSelected] = useState<GrammarCardData | null>(null)

  return (
    <section className="screen active" id="screen-grammar">
      <div className="grammar-header">
        <h1>Граматика · Nyelvtan</h1>
      </div>

      <div className="grammar-body">
        {grammarGroups.map(group => {
          const cards = grammarCards.filter(c => c.groupIndex === group.index)
          return (
            <div key={group.index} className="gram-section">
              {/* Section header */}
              <div className="gram-section-header" style={{ background: group.headerBg }}>
                <span className="gram-section-title">
                  {lang === 'ru' ? group.title.ru : group.title.uk}
                </span>
                <span className="gram-section-badge">{cards.length}</span>
              </div>

              {/* 2-column card grid */}
              <div className="gram-cards-grid">
                {cards.map(card => (
                  <button
                    key={card.id}
                    className="gram-card"
                    style={{ borderBottom: `3px solid ${group.bar}` }}
                    onClick={() => setSelected(card)}
                  >
                    <span className="gram-card-num" style={{ color: group.bar }}>
                      {String(card.num).padStart(2, '0')}
                    </span>
                    <span className="gram-card-title">
                      {lang === 'ru' ? card.title.ru : card.title.uk}
                    </span>
                    <span className="gram-card-suffix">{card.suffix}</span>
                  </button>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <GrammarModal card={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
