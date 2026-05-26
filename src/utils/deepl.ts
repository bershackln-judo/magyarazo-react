/** Calls the /api/translate Vercel proxy — never DeepL directly (CORS) */
export async function translateWithDeepL(
  text: string,
  sourceLang: string,
  targetLang: string,
): Promise<string> {
  const res = await fetch('/api/translate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, source_lang: sourceLang, target_lang: targetLang }),
  })
  if (!res.ok) throw new Error(`DeepL proxy ${res.status}`)
  const data = await res.json()
  return data.translations?.[0]?.text ?? ''
}
