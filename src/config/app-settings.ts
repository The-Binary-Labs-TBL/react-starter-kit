import { deDE } from '../locales/de-DE'
import { enEN } from '../locales/en-EN'

// Central app registry:
// Add defaults, storage keys, languages, and themes only here.
export const APP_SETTINGS = {
  storageKeys: {
    language: 'rsk-language',
    theme: 'rsk-theme',
  },
  behavior: {
    useBrowserLanguage: false,
  },
  defaults: {
    language: 'en-EN',
    theme: 'sunrise',
  },
  languages: [
    {
      code: 'de-DE',
      htmlLang: 'de',
      switcherLabel: 'DE',
      messages: deDE,
    },
    {
      code: 'en-EN',
      htmlLang: 'en',
      switcherLabel: 'EN',
      messages: enEN,
    },
  ],
  themes: [
    {
      id: 'midnight',
      switcherLabel: 'Midnight',
    },
    {
      id: 'sunrise',
      switcherLabel: 'Sunrise',
    },
  ],
} as const

export type Language = (typeof APP_SETTINGS.languages)[number]['code']
export type Theme = (typeof APP_SETTINGS.themes)[number]['id']
export type Translation = (typeof APP_SETTINGS.languages)[number]['messages']

export const languageEntries = APP_SETTINGS.languages
export const themeEntries = APP_SETTINGS.themes

export const languageCodes = languageEntries.map(({ code }) => code) as Language[]
export const themeIds = themeEntries.map(({ id }) => id) as Theme[]

export const languageMessages = Object.fromEntries(
  languageEntries.map(({ code, messages }) => [code, messages]),
) as Record<Language, Translation>

export const htmlLanguageMap = Object.fromEntries(
  languageEntries.map(({ code, htmlLang }) => [code, htmlLang]),
) as Record<Language, string>