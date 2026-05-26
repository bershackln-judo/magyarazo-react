import { createContext, useContext } from 'react'
import type { SavedWord } from '../types'

export interface SavedContextValue {
  saved: SavedWord[]
  isSaved: (hu: string) => boolean
  toggleSave: (word: SavedWord) => void
  removeWord: (hu: string) => void
  addManual: (word: Omit<SavedWord, 'savedAt'>) => void
  clearAll: () => void
  importWords: (words: SavedWord[]) => void
}

export const SavedContext = createContext<SavedContextValue>({
  saved: [],
  isSaved: () => false,
  toggleSave: () => {},
  removeWord: () => {},
  addManual: () => {},
  clearAll: () => {},
  importWords: () => {},
})

export const useSaved = () => useContext(SavedContext)
