import { useEffect, useState } from 'react'
import heroImg from '/images/hero.png'
import reactLogo from '/images/react.svg'
import viteLogo from '/images/vite.svg'
import faviconIcon from '/icons/favicon.svg'
import happyGif from '/gifs/happy.gif'
import { languageEntries, themeEntries } from '../config/app-settings'
import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'
import {
  getConnectionPreview,
  type ConnectionMode,
  type ConnectionPreview,
} from '../services/api'

const visuals = {
  hero: heroImg,
  react: reactLogo,
  vite: viteLogo,
  icon: faviconIcon,
  gif: happyGif,
}

const stackLogos = {
  react: reactLogo,
  vite: viteLogo,
  icon: faviconIcon,
}

export function HomePage() {
  const { copy, language, languages, setLanguage } = useLanguage()
  const { theme, themes, setTheme } = useTheme()
  const homepage = copy.homepage
  const [mode, setMode] = useState<ConnectionMode>('online')
  const [preview, setPreview] = useState<ConnectionPreview | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isActive = true

    async function loadPreview() {
      setIsLoading(true)
      const response = await getConnectionPreview(mode, homepage.connection.responses)

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
  }, [homepage.connection.responses, mode])

  return (
    <main className="homepage">
      <section className="homepage__manager" aria-label="App settings">
        <div className="homepage__manager-group">
          <span className="homepage__manager-label">{copy.controls.languageLabel}</span>
          <div className="homepage__manager-options">
            {languages.map((option) => (
              <button
                key={option}
                type="button"
                className={`homepage__manager-button${
                  language === option ? ' homepage__manager-button--active' : ''
                }`}
                onClick={() => setLanguage(option)}
                aria-pressed={language === option}
              >
                {languageEntries.find(({ code }) => code === option)?.switcherLabel ?? option}
              </button>
            ))}
          </div>
        </div>

        <div className="homepage__manager-group">
          <span className="homepage__manager-label">{copy.controls.themeLabel}</span>
          <div className="homepage__manager-options">
            {themes.map((option) => (
              <button
                key={option}
                type="button"
                className={`homepage__manager-button${
                  theme === option ? ' homepage__manager-button--active' : ''
                }`}
                onClick={() => setTheme(option)}
                aria-pressed={theme === option}
              >
                {themeEntries.find(({ id }) => id === option)?.switcherLabel ?? option}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="homepage__hero">
        <div className="homepage__copy">
          <p className="homepage__eyebrow">{homepage.hero.eyebrow}</p>
          <h1>{homepage.hero.title}</h1>
          <p className="homepage__lead">{homepage.hero.description}</p>

          <div className="homepage__actions">
            <a
              className="homepage__button homepage__button--primary"
              href={homepage.hero.primaryCta.href}
              target="_blank"
              rel="noreferrer"
            >
              {homepage.hero.primaryCta.label}
            </a>
            <a
              className="homepage__button homepage__button--secondary"
              href={homepage.hero.secondaryCta.href}
              target="_blank"
              rel="noreferrer"
            >
              {homepage.hero.secondaryCta.label}
            </a>
          </div>

          <ul className="homepage__highlights" aria-label={homepage.hero.highlightsLabel}>
            {homepage.hero.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>

        <div className="homepage__visual" aria-hidden="true">
          <div className="homepage__orb homepage__orb--react"></div>
          <div className="homepage__orb homepage__orb--vite"></div>
          <img
            src={visuals.hero}
            className="homepage__hero-base"
            width="170"
            height="179"
            alt=""
          />
          <img src={visuals.react} className="homepage__hero-react" alt="" />
          <img src={visuals.vite} className="homepage__hero-vite" alt="" />
          <img src={visuals.icon} className="homepage__hero-icon" alt="" />
        </div>
      </section>

      <section className="homepage__grid" aria-label={homepage.sectionsLabel}>
        <article className="homepage__card">
          <p className="homepage__kicker">{homepage.stack.kicker}</p>
          <h2>{homepage.stack.title}</h2>
          <p className="homepage__muted">{homepage.stack.description}</p>

          <div className="homepage__stack-list">
            {homepage.stack.items.map((item) => (
              <div key={item.title} className="homepage__stack-item">
                <img src={stackLogos[item.logo]} alt="" width="24" height="24" />
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="homepage__card homepage__card--status">
          <p className="homepage__kicker">{homepage.connection.kicker}</p>
          <div className="homepage__status-headline">
            <h2>{homepage.connection.title}</h2>
            <button
              type="button"
              className="homepage__toggle"
              onClick={() => setMode((current) => (current === 'online' ? 'offline' : 'online'))}
              aria-pressed={mode === 'online'}
            >
              {mode === 'online'
                ? homepage.connection.onlineButton
                : homepage.connection.offlineButton}
            </button>
          </div>

          <p className="homepage__muted">{homepage.connection.description}</p>

          <div className="homepage__status-panel">
            <span className={`homepage__badge homepage__badge--${mode}`}>
              {preview?.badge ?? homepage.connection.loadingBadge}
            </span>
            <strong>{isLoading ? homepage.connection.loadingTitle : preview?.title}</strong>
            <p>{isLoading ? homepage.connection.loadingDescription : preview?.description}</p>
            <span className="homepage__meta">
              {isLoading ? homepage.connection.loadingMeta : preview?.meta}
            </span>
          </div>

          <ul className="homepage__checklist">
            {homepage.connection.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="homepage__resources">
        <div className="homepage__section-heading">
          <p className="homepage__kicker">{homepage.resources.kicker}</p>
          <h2>{homepage.resources.title}</h2>
          <p className="homepage__muted">{homepage.resources.description}</p>
        </div>

        <div className="homepage__resource-grid">
          {homepage.resources.links.map((link) => (
            <a
              key={link.href}
              className="homepage__resource-card"
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              <img src={stackLogos[link.logo]} alt="" width="28" height="28" />
              <strong>{link.label}</strong>
              <span>{link.description}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="homepage__assets">
        <div className="homepage__section-heading">
          <p className="homepage__kicker">{homepage.assets.kicker}</p>
          <h2>{homepage.assets.title}</h2>
          <p className="homepage__muted">{homepage.assets.description}</p>
        </div>

        <div className="homepage__asset-grid">
          <article className="homepage__asset-card">
            <img src={visuals.icon} alt={homepage.assets.iconAlt} width="42" height="42" />
            <strong>{homepage.assets.iconTitle}</strong>
            <p>{homepage.assets.iconDescription}</p>
          </article>

          <article className="homepage__asset-card">
            <img src={visuals.hero} alt={homepage.assets.imageAlt} />
            <strong>{homepage.assets.imageTitle}</strong>
            <p>{homepage.assets.imageDescription}</p>
          </article>

          <article className="homepage__asset-card">
            <img src={visuals.gif} alt={homepage.assets.gifAlt} />
            <strong>{homepage.assets.gifTitle}</strong>
            <p>{homepage.assets.gifDescription}</p>
          </article>
        </div>
      </section>
    </main>
  )
}