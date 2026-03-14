/* eslint-disable react-refresh/only-export-components */

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react'
import {
  APP_SETTINGS,
  htmlLanguageMap,
  languageCodes,
  languageMessages,
  type Language,
  type Translation,
} from '../config/app-settings'

type LanguageContextValue = {
  copy: Translation
  language: Language
  languages: Language[]
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return APP_SETTINGS.defaults.language
  }

  const storedLanguage = window.localStorage.getItem(APP_SETTINGS.storageKeys.language)

  if (storedLanguage && languageCodes.includes(storedLanguage as Language)) {
    return storedLanguage as Language
  }

  if (!APP_SETTINGS.behavior.useBrowserLanguage) {
    return APP_SETTINGS.defaults.language
  }

  const browserLanguage = window.navigator.language

  if (languageCodes.includes(browserLanguage as Language)) {
    return browserLanguage as Language
  }

  const languageByPrefix = languageCodes.find((code) =>
    browserLanguage.toLowerCase().startsWith(code.slice(0, 2).toLowerCase()),
  )

  return languageByPrefix ?? APP_SETTINGS.defaults.language
}

export function LanguageProvider({ children }: PropsWithChildren) {
  const [language, setLanguage] = useState<Language>(() => getInitialLanguage())

  useEffect(() => {
    window.localStorage.setItem(APP_SETTINGS.storageKeys.language, language)
    document.documentElement.lang = htmlLanguageMap[language]
  }, [language])

  const value = useMemo<LanguageContextValue>(
    () => ({
      copy: languageMessages[language],
      language,
      languages: languageCodes,
      setLanguage,
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }

  return context
}