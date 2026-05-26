import { useState, useMemo } from 'react'
import type { Verb, Noun, Adjective, NounTopic } from '../types'
import { verbs } from '../data/verbs'
import { nouns } from '../data/nouns'
import { adjectives } from '../data/adjectives'
import { WordCard } from '../components/WordCard'
import { WordModal } from '../components/WordModal'
import { useLang } from '../contexts/LangContext'

type WordsTab = 'verbs' | 'nouns' | 'adj'
type AnyWord = Verb | Noun | Adjective

const NOUN_TOPICS: { key: NounTopic | 'all'; labelKey: string }[] = [
  { key: 'all',      labelKey: 'topic_all' },
  { key: 'people',   labelKey: 'topic_people' },
  { key: 'body',     labelKey: 'topic_body' },
  { key: 'food',     labelKey: 'topic_food' },
  { key: 'home',     labelKey: 'topic_home' },
  { key: 'city',     labelKey: 'topic_city' },
  { key: 'work',     labelKey: 'topic_work' },
  { key: 'time',     labelKey: 'topic_time' },
  { key: 'nature',   labelKey: 'topic_nature' },
  { key: 'shop',     labelKey: 'topic_shop' },
  { key: 'docs',     labelKey: 'topic_docs' },
  { key: 'emotions', labelKey: 'topic_emotions' },
]

export function WordsScreen() {
  const { lang, t } = useLang()
  const [tab, setTab] = useState<WordsTab>('nouns')
  const [topic, setTopic] = useState<NounTopic | 'all'>('all')
  const [search, setSearch] = useState('')
  const [modal, setModal] = useState<AnyWord | null>(null)

  const list = useMemo<AnyWord[]>(() => {
    if (tab === 'verbs') {
      const q = search.trim().toLowerCase()
      return q
        ? verbs.filter(v =>
            v.hu.toLowerCase().includes(q) ||
            v.ru.toLowerCase().includes(q) ||
            (v.uk && v.uk.toLowerCase().includes(q))
          )
        : verbs
    }
    if (tab === 'adj') return adjectives
    // nouns
    return topic === 'all' ? nouns : nouns.filter(n => n.topic === topic)
  }, [tab, topic, search])

  return (
    <section className="screen active" id="screen-nouns">
      <div className="nouns-header">
        <h1>{t('words_title')}</h1>

        {/* Type tabs */}
        <div className="type-tabs" id="type-tabs">
          {(['verbs', 'nouns', 'adj'] as WordsTab[]).map(type => (
            <button
              key={type}
              className={`type-tab${tab === type ? ' active' : ''}`}
              onClick={() => { setTab(type); setSearch('') }}
            >
              {t(type === 'verbs' ? 'tab_verbs' : type === 'nouns' ? 'tab_nouns' : 'tab_adj')}
            </button>
          ))}
        </div>

        {/* Verb search */}
        {tab === 'verbs' && (
          <div id="verb-search-wrap">
            <input
              className="search-input"
              type="search"
              placeholder={t('search_verb')}
              value={search}
              onChange={e => setSearch(e.target.value)}
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
            />
          </div>
        )}

        {/* Noun topic filters */}
        {tab === 'nouns' && (
          <div className="filter-tabs" id="noun-filter-tabs">
            {NOUN_TOPICS.map(({ key, labelKey }) => (
              <button
                key={key}
                className={`filter-tab${topic === key ? ' active' : ''}`}
                onClick={() => setTopic(key)}
              >
                {t(labelKey as Parameters<typeof t>[0])}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Word list */}
      <div className="nouns-list" id="nouns-list">
        {list.length === 0
          ? <p className="no-results">{t('dict_no_results')}</p>
          : list.map(word => (
              <WordCard
                key={word.hu}
                word={word}
                lang={lang}
                onClick={setModal}
              />
            ))
        }
      </div>

      {/* Modal */}
      <WordModal word={modal} onClose={() => setModal(null)} />
    </section>
  )
}
