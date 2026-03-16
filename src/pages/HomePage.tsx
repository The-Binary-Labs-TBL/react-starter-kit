import { useEffect, useState } from 'react'
import { languageEntries, themeEntries } from '../config/app-settings'
import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'
import { getConnectionPreview, type ConnectionMode, type ConnectionPreview } from '../services/api'

export function HomePage() {
  const { copy, language, languages, setLanguage } = useLanguage()
  const { theme, themes, setTheme } = useTheme()
  const homepage = copy.homepage
  const [mode, setMode] = useState<ConnectionMode>('online')
  const [preview, setPreview] = useState<ConnectionPreview | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    let isActive = true

    async function loadPreview() {
      setIsLoading(true)
      const response = await getConnectionPreview(mode, homepage.api.responses)

      if (!isActive) {
        return
      }

      setPreview(response)
      setIsLoading(false)
    }

    loadPreview()

    return () => {
      isActive = false
    }
  }, [homepage.api.responses, mode])

  return (
    <main className="homepage">
      <div className="homepage__shell">
        <header className="homepage__header">
          <div>
            <p className="homepage__eyebrow">{homepage.eyebrow}</p>
            <h1>{homepage.title}</h1>
            <p className="homepage__lead">{homepage.description}</p>
          </div>

          <div className="homepage__controls" aria-label={homepage.controlsLabel}>
            <div className="homepage__control-group">
              <span className="homepage__control-label">{copy.controls.languageLabel}</span>
              <div className="homepage__control-options">
                {languages.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={`homepage__chip${language === option ? ' homepage__chip--active' : ''}`}
                    onClick={() => setLanguage(option)}
                    aria-pressed={language === option}
                  >
                    {languageEntries.find(({ code }) => code === option)?.switcherLabel ?? option}
                  </button>
                ))}
              </div>
            </div>

            <div className="homepage__control-group">
              <span className="homepage__control-label">{copy.controls.themeLabel}</span>
              <div className="homepage__control-options">
                {themes.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={`homepage__chip${theme === option ? ' homepage__chip--active' : ''}`}
                    onClick={() => setTheme(option)}
                    aria-pressed={theme === option}
                  >
                    {themeEntries.find(({ id }) => id === option)?.switcherLabel ?? option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </header>

        <section className="homepage__section homepage__section--compact">
          <article className="homepage__card">
            <h2>{homepage.structure.title}</h2>
            <p>{homepage.structure.description}</p>
          </article>

          <article className="homepage__card homepage__card--muted">
            <div className="homepage__api-head">
              <div>
                <h2>{homepage.api.title}</h2>
                <p>{homepage.api.description}</p>
              </div>
              <button
                type="button"
                className="homepage__chip homepage__chip--action"
                onClick={() => setMode((current) => (current === 'online' ? 'offline' : 'online'))}
              >
                {mode === 'online' ? homepage.api.offlineAction : homepage.api.onlineAction}
              </button>
            </div>

            <div className="homepage__api-status" aria-live="polite">
              <strong>{isLoading ? homepage.api.loadingTitle : preview?.title}</strong>
              <span>{isLoading ? homepage.api.loadingMeta : preview?.meta}</span>
              <p>{isLoading ? homepage.api.loadingDescription : preview?.description}</p>
            </div>
          </article>
        </section>
      </div>
    </main>
  )
}