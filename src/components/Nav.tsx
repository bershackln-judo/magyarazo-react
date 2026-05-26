import { type ReactElement } from 'react'
import { useLang } from '../contexts/LangContext'

type Screen = 'home' | 'words' | 'assistant' | 'dictionary'

interface Props {
  current: Screen
  onChange: (s: Screen) => void
}

export function Nav({ current, onChange }: Props) {
  const { t } = useLang()

  const items: { id: Screen; icon: ReactElement; labelKey: Parameters<typeof t>[0] }[] = [
    {
      id: 'home',
      labelKey: 'nav_home',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z"/>
          <path d="M9 21V12h6v9"/>
        </svg>
      ),
    },
    {
      id: 'words',
      labelKey: 'nav_words',
      icon: (
        <svg viewBox="0 0 24 24">
          <rect x="3" y="3" width="8" height="8" rx="1"/>
          <rect x="13" y="3" width="8" height="8" rx="1"/>
          <rect x="3" y="13" width="8" height="8" rx="1"/>
          <rect x="13" y="13" width="8" height="8" rx="1"/>
        </svg>
      ),
    },
    {
      id: 'assistant',
      labelKey: 'nav_asst',
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9"/>
          <path d="M12 8v4l3 3"/>
        </svg>
      ),
    },
    {
      id: 'dictionary',
      labelKey: 'nav_dict',
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M4 19V5a2 2 0 012-2h13a1 1 0 011 1v14"/>
          <path d="M4 19a2 2 0 002 2h13a1 1 0 001-1v-1"/>
          <path d="M8 7h8M8 11h5"/>
        </svg>
      ),
    },
  ]

  return (
    <nav>
      {items.map(item => (
        <button
          key={item.id}
          className={`nav-btn${current === item.id ? ' active' : ''}`}
          onClick={() => onChange(item.id)}
        >
          {item.icon}
          <span className="nav-label">{t(item.labelKey)}</span>
        </button>
      ))}
    </nav>
  )
}
