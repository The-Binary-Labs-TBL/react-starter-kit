/* eslint-disable react-refresh/only-export-components */

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react'
import { APP_SETTINGS, themeIds, type Theme } from '../config/app-settings'

type ThemeContextValue = {
  theme: Theme
  themes: Theme[]
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') {
    return APP_SETTINGS.defaults.theme
  }

  const storedTheme = window.localStorage.getItem(APP_SETTINGS.storageKeys.theme)

  if (storedTheme && themeIds.includes(storedTheme as Theme)) {
    return storedTheme as Theme
  }

  return APP_SETTINGS.defaults.theme
}

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme())

  useEffect(() => {
    window.localStorage.setItem(APP_SETTINGS.storageKeys.theme, theme)
    document.documentElement.dataset.theme = theme
  }, [theme])

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      themes: themeIds,
      setTheme,
    }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}