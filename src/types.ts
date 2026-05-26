// ── Core translation entry ──────────────────────────────────────────────────

export interface Example {
  hu: string
  ru: string
  uk?: string
}

export interface Verb {
  hu: string
  ru: string
  uk?: string
  transcription: string
  examples: Example[]
}

export type NounTopic =
  | 'people'
  | 'body'
  | 'food'
  | 'home'
  | 'city'
  | 'work'
  | 'time'
  | 'nature'
  | 'shop'
  | 'docs'
  | 'emotions'
  | 'transport'
  | 'health'
  | 'tech'

export interface Noun {
  topic: NounTopic
  hu: string
  ru: string
  uk?: string
  transcription: string
  examples: Example[]
}

export interface Adjective {
  topic: 'adj'
  hu: string
  ru: string
  uk?: string
  transcription: string
  antonym: string
  examples: Example[]
}

export type Word = Verb | Noun | Adjective

// ── Saved word (localStorage) ───────────────────────────────────────────────

export interface SavedWord {
  hu: string
  ru: string
  uk?: string
  transcription?: string
  examples?: Example[]
  savedAt: number
  manual?: boolean
  direction?: 'hu->ru' | 'ru->hu'
}

// ── App language ────────────────────────────────────────────────────────────

export type AppLang = 'ru' | 'uk'

// ── Case examples ───────────────────────────────────────────────────────────

export interface BilingualText {
  ru: string
  uk: string
}

export interface CaseEntry {
  where: BilingualText
  whereTo: BilingualText
  whereFrom: BilingualText
}
