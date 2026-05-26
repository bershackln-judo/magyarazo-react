import { useState } from 'react'
import { LangContext } from './contexts/LangContext'
import { SavedContext } from './contexts/SavedContext'
import { useLanguage } from './hooks/useLanguage'
import { useSavedWords } from './hooks/useSavedWords'
import { Nav } from './components/Nav'
import { HomeScreen } from './screens/HomeScreen'
import { WordsScreen } from './screens/WordsScreen'
import { AssistantScreen } from './screens/AssistantScreen'
import { DictionaryScreen } from './screens/DictionaryScreen'

export type Screen = 'home' | 'words' | 'assistant' | 'dictionary' | 'quiz'

export default function App() {
  const [screen, setScreen] = useState<Screen>('home')
  const langCtx = useLanguage()
  const savedCtx = useSavedWords()

  function renderScreen() {
    switch (screen) {
      case 'home':       return <HomeScreen onNavigate={setScreen} />
      case 'words':      return <WordsScreen />
      case 'assistant':  return <AssistantScreen />
      case 'dictionary': return <DictionaryScreen />
      default:           return <HomeScreen onNavigate={setScreen} />
    }
  }

  const navScreen = (screen === 'quiz' ? 'home' : screen) as 'home' | 'words' | 'assistant' | 'dictionary'

  return (
    <LangContext.Provider value={langCtx}>
      <SavedContext.Provider value={savedCtx}>
        <main>
          {renderScreen()}
        </main>
        <Nav current={navScreen} onChange={setScreen} />
      </SavedContext.Provider>
    </LangContext.Provider>
  )
}
