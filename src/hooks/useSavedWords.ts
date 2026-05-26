import { useState, useCallback } from 'react'
import type { SavedWord } from '../types'

const STORAGE_KEY = 'savedVerbs'

function readSaved(): SavedWord[] {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') }
  catch { return [] }
}

function writeSaved(words: SavedWord[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(words))
}

export function useSavedWords() {
  const [saved, setSavedState] = useState<SavedWord[]>(readSaved)

  const refresh = useCallback(() => {
    setSavedState(readSaved())
  }, [])

  const isSaved = useCallback(
    (hu: string) => saved.some(w => w.hu === hu),
    [saved],
  )

  const toggleSave = useCallback((word: SavedWord) => {
    setSavedState(prev => {
      const exists = prev.some(w => w.hu === word.hu)
      const next = exists
        ? prev.filter(w => w.hu !== word.hu)
        : [...prev, { ...word, savedAt: Date.now() }]
      writeSaved(next)
      return next
    })
  }, [])

  const removeWord = useCallback((hu: string) => {
    setSavedState(prev => {
      const next = prev.filter(w => w.hu !== hu)
      writeSaved(next)
      return next
    })
  }, [])

  const addManual = useCallback((word: Omit<SavedWord, 'savedAt'>) => {
    setSavedState(prev => {
      const next = [...prev, { ...word, savedAt: Date.now() }]
      writeSaved(next)
      return next
    })
  }, [])

  const clearAll = useCallback(() => {
    writeSaved([])
    setSavedState([])
  }, [])

  const importWords = useCallback((words: SavedWord[]) => {
    writeSaved(words)
    setSavedState(words)
  }, [])

  return { saved, isSaved, toggleSave, removeWord, addManual, clearAll, importWords, refresh }
}
