import { useEffect, useState } from 'react'
import heroImg from '/images/hero.png'
import reactLogo from '/images/react.svg'
import viteLogo from '/images/vite.svg'
import faviconIcon from '/icons/favicon.svg'
import happyGif from '/gifs/happy.gif'
import { enEN } from '../locales/en-EN'
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
  const copy = enEN.homepage
  const [mode, setMode] = useState<ConnectionMode>('online')
  const [preview, setPreview] = useState<ConnectionPreview | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isActive = true

    async function loadPreview() {
      setIsLoading(true)
      const response = await getConnectionPreview(mode)

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
  }, [mode])

  return (
    <main className="homepage">
      <section className="homepage__hero">
        <div className="homepage__copy">
          <p className="homepage__eyebrow">{copy.hero.eyebrow}</p>
          <h1>{copy.hero.title}</h1>
          <p className="homepage__lead">{copy.hero.description}</p>

          <div className="homepage__actions">
            <a
              className="homepage__button homepage__button--primary"
              href={copy.hero.primaryCta.href}
              target="_blank"
              rel="noreferrer"
            >
              {copy.hero.primaryCta.label}
            </a>
            <a
              className="homepage__button homepage__button--secondary"
              href={copy.hero.secondaryCta.href}
              target="_blank"
              rel="noreferrer"
            >
              {copy.hero.secondaryCta.label}
            </a>
          </div>

          <ul className="homepage__highlights" aria-label={copy.hero.highlightsLabel}>
            {copy.hero.highlights.map((highlight) => (
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

      <section className="homepage__grid" aria-label={copy.sectionsLabel}>
        <article className="homepage__card">
          <p className="homepage__kicker">{copy.stack.kicker}</p>
          <h2>{copy.stack.title}</h2>
          <p className="homepage__muted">{copy.stack.description}</p>

          <div className="homepage__stack-list">
            {copy.stack.items.map((item) => (
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
          <p className="homepage__kicker">{copy.connection.kicker}</p>
          <div className="homepage__status-headline">
            <h2>{copy.connection.title}</h2>
            <button
              type="button"
              className="homepage__toggle"
              onClick={() => setMode((current) => (current === 'online' ? 'offline' : 'online'))}
              aria-pressed={mode === 'online'}
            >
              {mode === 'online'
                ? copy.connection.onlineButton
                : copy.connection.offlineButton}
            </button>
          </div>

          <p className="homepage__muted">{copy.connection.description}</p>

          <div className="homepage__status-panel">
            <span className={`homepage__badge homepage__badge--${mode}`}>
              {preview?.badge ?? copy.connection.loadingBadge}
            </span>
            <strong>{isLoading ? copy.connection.loadingTitle : preview?.title}</strong>
            <p>{isLoading ? copy.connection.loadingDescription : preview?.description}</p>
            <span className="homepage__meta">
              {isLoading ? copy.connection.loadingMeta : preview?.meta}
            </span>
          </div>

          <ul className="homepage__checklist">
            {copy.connection.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="homepage__resources">
        <div className="homepage__section-heading">
          <p className="homepage__kicker">{copy.resources.kicker}</p>
          <h2>{copy.resources.title}</h2>
          <p className="homepage__muted">{copy.resources.description}</p>
        </div>

        <div className="homepage__resource-grid">
          {copy.resources.links.map((link) => (
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
          <p className="homepage__kicker">{copy.assets.kicker}</p>
          <h2>{copy.assets.title}</h2>
          <p className="homepage__muted">{copy.assets.description}</p>
        </div>

        <div className="homepage__asset-grid">
          <article className="homepage__asset-card">
            <img src={visuals.icon} alt={copy.assets.iconAlt} width="42" height="42" />
            <strong>{copy.assets.iconTitle}</strong>
            <p>{copy.assets.iconDescription}</p>
          </article>

          <article className="homepage__asset-card">
            <img src={visuals.hero} alt={copy.assets.imageAlt} />
            <strong>{copy.assets.imageTitle}</strong>
            <p>{copy.assets.imageDescription}</p>
          </article>

          <article className="homepage__asset-card">
            <img src={visuals.gif} alt={copy.assets.gifAlt} />
            <strong>{copy.assets.gifTitle}</strong>
            <p>{copy.assets.gifDescription}</p>
          </article>
        </div>
      </section>
    </main>
  )
}