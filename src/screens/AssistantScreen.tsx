import { useState, useRef, useEffect } from 'react'
import type { AppLang } from '../types'
import { useLang } from '../contexts/LangContext'
import { useSaved } from '../contexts/SavedContext'

// ── Types ──────────────────────────────────────────────────────────────────────

interface GeminiResult {
  hu: string
  translation: string
  transcription: string
  example: string
  exampleTranslation: string
}

// ── Helpers ────────────────────────────────────────────────────────────────────

function speak(text: string, langCode: string) {
  if (!window.speechSynthesis) return
  window.speechSynthesis.cancel()
  const u = new SpeechSynthesisUtterance(text)
  u.lang = langCode; u.rate = 0.85
  window.speechSynthesis.speak(u)
}

function buildPrompt(text: string, lang: AppLang): string {
  if (lang === 'uk') {
    return (
      `Угорське слово або фраза: "${text}"\n` +
      `Дай відповідь строго у форматі:\n` +
      `1. Переклад: <переклад на українську>\n` +
      `2. Транскрипція: [<вимова латиницею>]\n` +
      `3. Приклад: <приклад речення угорською — переклад речення на українську>\n` +
      `Більше нічого не додавай.`
    )
  }
  return (
    `Венгерское слово или фраза: "${text}"\n` +
    `Дай ответ строго в формате:\n` +
    `1. Перевод: <перевод на русский>\n` +
    `2. Транскрипция: [<произношение латиницей>]\n` +
    `3. Пример: <пример предложения на венгерском — перевод предложения на русский>\n` +
    `Больше ничего не добавляй.`
  )
}

function buildCameraPrompt(lang: AppLang): string {
  if (lang === 'uk') {
    return (
      `Подивися на це зображення та знайди всі угорські слова або фрази.\n` +
      `Поверни лише знайдені угорські слова через кому, нічого іншого.`
    )
  }
  return (
    `Посмотри на это изображение и найди все венгерские слова или фразы.\n` +
    `Верни только найденные венгерские слова через запятую, ничего лишнего.`
  )
}

async function callGemini(prompt: string, apiKey: string): Promise<string> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
  })
  if (!res.ok) throw new Error(`Gemini ${res.status}`)
  const data = await res.json()
  return data.candidates?.[0]?.content?.parts?.[0]?.text ?? ''
}

async function callGeminiVision(prompt: string, imageBase64: string, mimeType: string, apiKey: string): Promise<string> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{
        parts: [
          { text: prompt },
          { inline_data: { mime_type: mimeType, data: imageBase64 } },
        ],
      }],
    }),
  })
  if (!res.ok) throw new Error(`Gemini Vision ${res.status}`)
  const data = await res.json()
  return data.candidates?.[0]?.content?.parts?.[0]?.text ?? ''
}

function parseGeminiRaw(raw: string): Omit<GeminiResult, 'hu'> {
  let translation = ''
  let transcription = ''
  let example = ''
  let exampleTranslation = ''

  for (const line of raw.split('\n')) {
    const l = line.trim()
    const m1 = l.match(/^1\.\s*(?:Перевод|Переклад)\s*:\s*(.+)/i)
    const m2 = l.match(/^2\.\s*(?:Транскрипция|Транскрипція)\s*:\s*(.+)/i)
    const m3 = l.match(/^3\.\s*(?:Пример|Приклад)\s*:\s*(.+)/i)
    if (m1) translation = m1[1].trim()
    if (m2) transcription = m2[1].replace(/^\[|\]$/g, '').trim()
    if (m3) {
      const full = m3[1].trim()
      const dash = full.match(/^(.+?)\s*[—–-]\s*(.+)$/)
      if (dash) { example = dash[1].trim(); exampleTranslation = dash[2].trim() }
      else example = full
    }
  }

  // fallback: if no structured match, try to use full response as translation
  if (!translation) translation = raw.trim().split('\n')[0] ?? ''

  return { translation, transcription, example, exampleTranslation }
}

function fileToBase64(file: File): Promise<{ base64: string; mimeType: string }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const result = reader.result as string
      const base64 = result.split(',')[1] ?? ''
      resolve({ base64, mimeType: file.type || 'image/jpeg' })
    }
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

// ── SpeechRecognition type shim ────────────────────────────────────────────────

declare global {
  interface Window {
    SpeechRecognition?: new () => SpeechRecognitionInstance
    webkitSpeechRecognition?: new () => SpeechRecognitionInstance
  }
}

interface SpeechRecognitionInstance {
  lang: string
  continuous: boolean
  interimResults: boolean
  onresult: (e: SpeechRecognitionEvent) => void
  onerror: (e: SpeechRecognitionErrorEvent) => void
  onend: () => void
  start(): void
  stop(): void
}

interface SpeechRecognitionEvent {
  results: { [key: number]: { [key: number]: { transcript: string } } }
}

interface SpeechRecognitionErrorEvent { error: string }

// ── Component ──────────────────────────────────────────────────────────────────

export function AssistantScreen() {
  const { lang, t } = useLang()
  const { saved, addManual } = useSaved()

  const [input, setInput]             = useState('')
  const [recording, setRecording]     = useState(false)
  const [loading, setLoading]         = useState(false)
  const [loadingText, setLoadingText] = useState('')
  const [result, setResult]           = useState<GeminiResult | null>(null)
  const [resultSaved, setResultSaved] = useState(false)
  const [imgPreview, setImgPreview]   = useState<string | null>(null)
  const [ocrReading, setOcrReading]   = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [geminiKey, setGeminiKey]     = useState(() => localStorage.getItem('geminiApiKey') ?? '')

  const camRef   = useRef<HTMLInputElement>(null)
  const recogRef = useRef<SpeechRecognitionInstance | null>(null)

  // Sync Gemini key to localStorage
  useEffect(() => {
    localStorage.setItem('geminiApiKey', geminiKey)
  }, [geminiKey])

  // Check if result is already saved
  useEffect(() => {
    if (result) {
      setResultSaved(saved.some(w => w.hu === result.hu))
    }
  }, [result, saved])

  // ── Query Gemini for word analysis ───────────────────────────────────────────
  async function queryWord(text: string) {
    const trimmed = text.trim()
    if (!trimmed) return

    if (!geminiKey) {
      setSettingsOpen(true)
      alert(lang === 'uk'
        ? 'Введіть Gemini API ключ у налаштуваннях.'
        : 'Введите Gemini API ключ в настройках.')
      return
    }

    setLoading(true)
    setLoadingText(t('loading_text'))
    setResult(null)
    setImgPreview(null)

    try {
      const prompt = buildPrompt(trimmed, lang)
      const raw    = await callGemini(prompt, geminiKey)
      const parsed = parseGeminiRaw(raw)
      setResult({ hu: trimmed, ...parsed })
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      alert((lang === 'uk' ? 'Помилка: ' : 'Ошибка: ') + msg)
    } finally {
      setLoading(false)
      setInput('')
    }
  }

  // ── Mic ───────────────────────────────────────────────────────────────────────
  function toggleMic() {
    if (recording) {
      recogRef.current?.stop()
      setRecording(false)
      return
    }

    const SR = window.SpeechRecognition ?? window.webkitSpeechRecognition
    if (!SR) {
      alert(lang === 'uk'
        ? 'Ваш браузер не підтримує розпізнавання мовлення.'
        : 'Ваш браузер не поддерживает распознавание речи.')
      return
    }

    const r = new SR()
    r.lang = 'hu-HU'
    r.continuous = false
    r.interimResults = false

    r.onresult = (e) => {
      const transcript = e.results[0]?.[0]?.transcript ?? ''
      if (transcript) {
        setInput(transcript)
        queryWord(transcript)
      }
    }

    r.onerror = (e) => {
      if (e.error !== 'no-speech' && e.error !== 'aborted') {
        alert((lang === 'uk' ? 'Помилка мікрофона: ' : 'Ошибка микрофона: ') + e.error)
      }
      setRecording(false)
    }

    r.onend = () => setRecording(false)

    recogRef.current = r
    r.start()
    setRecording(true)
  }

  // ── Camera ────────────────────────────────────────────────────────────────────
  async function handleCameraFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    e.target.value = ''

    if (!geminiKey) {
      setSettingsOpen(true)
      alert(lang === 'uk'
        ? 'Введіть Gemini API ключ у налаштуваннях.'
        : 'Введите Gemini API ключ в настройках.')
      return
    }

    // Show preview
    const previewUrl = URL.createObjectURL(file)
    setImgPreview(previewUrl)
    setResult(null)
    setOcrReading(true)

    try {
      const { base64, mimeType } = await fileToBase64(file)
      const cameraPrompt = buildCameraPrompt(lang)
      const ocrText = await callGeminiVision(cameraPrompt, base64, mimeType, geminiKey)
      const extracted = ocrText.trim()

      if (!extracted) {
        setOcrReading(false)
        alert(lang === 'uk' ? 'Текст не знайдено.' : 'Текст не найден.')
        return
      }

      setOcrReading(false)
      setInput(extracted)
      await queryWord(extracted)
    } catch (err) {
      setOcrReading(false)
      const msg = err instanceof Error ? err.message : String(err)
      alert((lang === 'uk' ? 'Помилка: ' : 'Ошибка: ') + msg)
    }
  }

  // ── Save result ───────────────────────────────────────────────────────────────
  function saveResult() {
    if (!result || resultSaved) return
    addManual({
      hu: result.hu,
      ru: result.translation,
      transcription: result.transcription,
      examples: result.example
        ? [{ hu: result.example, ru: result.exampleTranslation }]
        : [],
      manual: true,
      direction: 'hu->ru',
    })
    setResultSaved(true)
  }

  // ── Labels ────────────────────────────────────────────────────────────────────
  const label = {
    translation:  lang === 'uk' ? 'Переклад'       : 'Перевод',
    transcription: lang === 'uk' ? 'Транскрипція'  : 'Транскрипция',
    example:      lang === 'uk' ? 'Приклад'        : 'Пример',
    micActive:    lang === 'uk' ? 'Слухаю...'      : 'Слушаю...',
    noKey:        lang === 'uk' ? 'Потрібен Gemini API ключ' : 'Нужен Gemini API ключ',
  }

  return (
    <section className="screen active" id="screen-assistant">
      <div className="asst-header">
        <h1>{t('asst_title')}</h1>
      </div>

      <div className="asst-body">

        {/* ── Mic + Camera row ── */}
        <div className="asst-buttons-row">
          <div className="asst-mic-wrap">
            <button
              className={`asst-mic-btn${recording ? ' recording' : ''}`}
              onClick={toggleMic}
              aria-label={recording ? label.micActive : t('mic_status')}
            >
              {recording ? (
                /* Stop icon */
                <svg viewBox="0 0 24 24">
                  <rect x="6" y="6" width="12" height="12" rx="2" ry="2" fill="#fff"/>
                </svg>
              ) : (
                /* Mic icon */
                <svg viewBox="0 0 24 24">
                  <path d="M12 1a4 4 0 0 1 4 4v7a4 4 0 0 1-8 0V5a4 4 0 0 1 4-4z"/>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
                  <line x1="12" y1="19" x2="12" y2="23" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
                  <line x1="8"  y1="23" x2="16" y2="23" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
                </svg>
              )}
            </button>
            <span className={`asst-mic-status${recording ? ' active' : ''}`}>
              {recording ? label.micActive : t('mic_status')}
            </span>
          </div>

          <div className="asst-cam-wrap">
            <button
              className="asst-cam-btn"
              onClick={() => camRef.current?.click()}
              aria-label={t('cam_label')}
            >
              <svg viewBox="0 0 24 24">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                <circle cx="12" cy="13" r="4"/>
              </svg>
            </button>
            <span className="asst-cam-label">{t('cam_label')}</span>
            <input
              ref={camRef}
              type="file"
              accept="image/*"
              capture="environment"
              style={{ display: 'none' }}
              onChange={handleCameraFile}
            />
          </div>
        </div>

        {/* ── Image preview + OCR spinner ── */}
        {imgPreview && (
          <div className="asst-img-preview">
            <img src={imgPreview} alt="preview" />
            {ocrReading && (
              <div className="asst-ocr-bar">
                <div className="asst-ocr-spinner" />
                <span>{t('ocr_reading')}</span>
              </div>
            )}
          </div>
        )}

        {/* ── Text input row ── */}
        <div className="asst-input-row">
          <input
            className="asst-input"
            type="text"
            placeholder={t('asst_placeholder')}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && !loading && queryWord(input)}
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
          />
          <button
            className="asst-send-btn"
            onClick={() => queryWord(input)}
            disabled={loading || !input.trim()}
            aria-label="Send"
          >
            <svg viewBox="0 0 24 24">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </div>

        {/* ── Loading ── */}
        {loading && (
          <div className="asst-loading">
            <div className="asst-spinner" />
            <p>{loadingText}</p>
          </div>
        )}

        {/* ── Result card ── */}
        {!loading && result && (
          <div className="asst-result">
            <div className="asst-result-word">{result.hu}</div>

            {result.translation && (
              <div className="asst-result-row">
                <span className="asst-result-label">{label.translation}</span>
                <span className="asst-result-value">{result.translation}</span>
              </div>
            )}

            {result.transcription && (
              <div className="asst-result-row">
                <span className="asst-result-label">{label.transcription}</span>
                <span className="asst-result-value">[{result.transcription}]</span>
              </div>
            )}

            {result.example && (
              <div className="asst-result-row">
                <span className="asst-result-label">{label.example}</span>
                <span className="asst-result-value">
                  {result.example}
                  {result.exampleTranslation && (
                    <><br /><em style={{ color: '#aaa', fontSize: '13px' }}>{result.exampleTranslation}</em></>
                  )}
                </span>
              </div>
            )}

            <div className="asst-result-actions">
              <button
                className="asst-result-btn asst-listen-result-btn"
                onClick={() => speak(result.hu, 'hu-HU')}
              >
                <svg viewBox="0 0 24 24">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" fill="none" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                {t('listen')}
              </button>

              <button
                className={`asst-result-btn asst-save-result-btn${resultSaved ? ' saved' : ''}`}
                onClick={saveResult}
                disabled={resultSaved}
              >
                <svg viewBox="0 0 24 24">
                  {resultSaved
                    ? <polyline points="20 6 9 17 4 12"/>
                    : <><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></>
                  }
                </svg>
                {resultSaved ? t('saved_in_dict') : t('save_to_dict')}
              </button>
            </div>
          </div>
        )}

        {/* ── No-key hint ── */}
        {!loading && !result && !geminiKey && (
          <p style={{ fontSize: 13, color: '#bbb', textAlign: 'center', padding: '0 16px' }}>
            {label.noKey}
          </p>
        )}

      </div>{/* end .asst-body */}

      {/* ── Settings ── */}
      <div className="asst-settings">
        <div
          className="asst-settings-toggle"
          onClick={() => setSettingsOpen(o => !o)}
          role="button"
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && setSettingsOpen(o => !o)}
        >
          <span>{t('settings_api')}</span>
          <span className={`asst-settings-arrow${settingsOpen ? ' open' : ''}`}>›</span>
        </div>

        <div className={`asst-settings-body${settingsOpen ? ' open' : ''}`}>
          <label className="asst-settings-label">{t('gemini_key')}</label>
          <input
            className="asst-api-input"
            type="password"
            placeholder="AIza..."
            value={geminiKey}
            onChange={e => setGeminiKey(e.target.value)}
            autoComplete="off"
            spellCheck={false}
          />
          <p className="asst-settings-hint">
            {t('gemini_hint')}{' '}
            <a
              href="https://aistudio.google.com/app/apikey"
              target="_blank"
              rel="noreferrer"
            >
              aistudio.google.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
