import { useLang } from '../contexts/LangContext'

export function DictionaryScreen() {
  const { t } = useLang()
  return (
    <section className="screen active" id="screen-dictionary">
      <div className="dict-header">
        <div className="dict-title-row">
          <h1>{t('dict_title')}</h1>
        </div>
      </div>
      <div className="dict-list">
        <p style={{ padding: 32, color: '#999', textAlign: 'center' }}>
          Etap 4 — coming soon
        </p>
      </div>
    </section>
  )
}
