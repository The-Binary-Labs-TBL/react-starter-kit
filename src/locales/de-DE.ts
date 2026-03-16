export const deDE = {
  controls: {
    languageLabel: 'Sprache',
    themeLabel: 'Theme',
  },
  homepage: {
    controlsLabel: 'App-Einstellungen',
    eyebrow: 'React Starter Kit',
    title: 'Eine minimale Basis fuer React-Projekte.',
    description:
      'Hier ist nur das Wesentliche enthalten: Sprache, Theme und ein kleiner API-Testbereich.',
    structure: {
      title: 'Standardstruktur',
      description:
        'Nutze `pages`, `contexts`, `styles` und `services` als kleine Basisstruktur fuer das Projekt.',
    },
    api: {
      title: 'Test-API',
      description: 'Ein kleiner Mock-Request, um Loading-States und einen einfachen Service zu pruefen.',
      onlineAction: 'Zu online wechseln',
      offlineAction: 'Zu offline wechseln',
      loadingTitle: 'Antwort wird geladen...',
      loadingDescription: 'Der Mock-Service bereitet gerade ein Ergebnis vor.',
      loadingMeta: 'Anfrage laeuft',
      responses: {
        online: {
          badge: 'Online',
          title: 'Service erreichbar',
          description: 'Die Mock-API hat eine erfolgreiche Starter-Antwort geliefert.',
          meta: 'Modus: online',
        },
        offline: {
          badge: 'Offline',
          title: 'Fallback aktiv',
          description: 'Die Mock-API hat eine lokale Fallback-Antwort geliefert.',
          meta: 'Modus: offline',
        },
      },
    },
  },
} as const