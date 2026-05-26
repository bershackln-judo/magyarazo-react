import { useLang } from '../contexts/LangContext'

export function AssistantScreen() {
  const { t } = useLang()
  return (
    <section className="screen active" id="screen-assistant">
      <div className="asst-header">
        <h1>{t('asst_title')}</h1>
      </div>
      <div className="asst-body">
        <p style={{ padding: 32, color: '#999', textAlign: 'center' }}>
          Etap 6 — coming soon
        </p>
      </div>
    </section>
  )
}
