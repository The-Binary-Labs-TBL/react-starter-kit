export const deDE = {
  controls: {
    languageLabel: 'Sprache',
    themeLabel: 'Theme',
  },
  homepage: {
    sectionsLabel: 'Starter-Kit Uebersicht',
    hero: {
      eyebrow: 'React Starter Kit',
      title: 'Starte schneller mit einer einfachen und sauber aufgebauten Basis.',
      description:
        'Dieses Template zeigt bewusst schlank, wie Routing, wiederverwendbare Styles, Assets und Services in einem echten React-Projekt zusammenspielen.',
      highlightsLabel: 'Starter-Kit Highlights',
      highlights: [
        'TypeScript bereit',
        'React Router enthalten',
        'Leicht erweiterbare Struktur',
      ],
      primaryCta: {
        label: 'React Docs oeffnen',
        href: 'https://react.dev/learn',
      },
      secondaryCta: {
        label: 'Vite Guide oeffnen',
        href: 'https://vite.dev/guide/',
      },
    },
    stack: {
      kicker: 'Was enthalten ist',
      title: 'Ein kleines Setup, das von Anfang an gute Gewohnheiten foerdert',
      description:
        'Jeder Bereich gibt Einsteigern einen klaren naechsten Schritt, statt nur einen Demo-Counter ohne Richtung zu hinterlassen.',
      items: [
        {
          title: 'React 19',
          description: 'Baue Seiten aus wiederverwendbaren UI-Bausteinen und lokalem State.',
          logo: 'react',
        },
        {
          title: 'Vite 8',
          description: 'Starte schnell einen Dev-Server und halte das Build-Setup uebersichtlich.',
          logo: 'vite',
        },
        {
          title: 'Projekt-Identitaet',
          description: 'Nutze eigene Icons, Fonts, Bilder und Branding direkt vom ersten Tag an.',
          logo: 'icon',
        },
      ],
    },
    connection: {
      kicker: 'Platzhalter-Service-Layer',
      title: 'Simuliere Online- und Offline-Zustaende im Frontend',
      description:
        'Der Toggle unten nutzt einen Fake-Service, damit man direkt sieht, wie sich UI-Zustaende bei unterschiedlichen Antworten veraendern.',
      onlineButton: 'Zu Offline-Vorschau wechseln',
      offlineButton: 'Zu Online-Vorschau wechseln',
      loadingBadge: 'Service wird geprueft',
      loadingTitle: 'Starter-Vorschau wird geladen...',
      loadingDescription: 'Platzhalter-Daten werden aus dem Demo-Service geladen.',
      loadingMeta: 'Antwort wird vorbereitet',
      responses: {
        online: {
          badge: 'API online',
          title: 'Mit einem Platzhalter-Endpunkt verbunden',
          description:
            'Dein Frontend kann sich so verhalten, als haette ein Backend erfolgreich geantwortet und Starter-Inhalte geliefert.',
          meta: 'Mock-Latenz: 180ms',
        },
        offline: {
          badge: 'Offline-Modus',
          title: 'Fallback-Verhalten im Frontend wird gezeigt',
          description:
            'Dieselbe UI kann fehlende Verbindung erklaeren und fuer Nutzer trotzdem klar und stabil bleiben.',
          meta: 'Fallback-Quelle: lokaler Platzhalter',
        },
      },
      checklist: [
        'Spaeter leicht gegen ein echtes Backend austauschbar',
        'Einfach genug, um ohne Zusatzbibliotheken verstanden zu werden',
        'Nuetzlich fuer Loading-, Error- und Empty-State-Uebungen',
      ],
    },
    resources: {
      kicker: 'Dokumentation',
      title: 'Hilfreiche Links fuer den naechsten Lernschritt',
      description:
        'Ein paar verlaessliche Referenzen helfen neuen Entwicklern, nach dem Start des Templates direkt sinnvoll weiterzumachen.',
      links: [
        {
          label: 'React Learn',
          description: 'Verstehe Komponenten, Props, Hooks und Rendering-Grundlagen.',
          href: 'https://react.dev/learn',
          logo: 'react',
        },
        {
          label: 'Vite Guide',
          description: 'Sieh dir an, wie Dev-Server, Assets und Build-Pipeline organisiert sind.',
          href: 'https://vite.dev/guide/',
          logo: 'vite',
        },
      ],
    },
    assets: {
      kicker: 'Verwendete Assets',
      title: 'Diese Startseite nutzt Icons, Bilder, GIFs und eigene Fonts',
      description:
        'Das Starter-Kit zeigt typische Frontend-Assets direkt im Einsatz, damit neue Projekte das Muster einfach uebernehmen koennen.',
      iconTitle: 'Icon-Beispiel',
      iconDescription: 'Das Favicon wird in der UI als leichter Markenanker wiederverwendet.',
      iconAlt: 'Starter-Kit Icon',
      imageTitle: 'Bild-Beispiel',
      imageDescription: 'Ein Hero-Bild kann einen Abschnitt tragen und den Einstieg bewusster wirken lassen.',
      imageAlt: 'Starter-Kit Hero-Grafik',
      gifTitle: 'GIF-Beispiel',
      gifDescription: 'Animierte Assets eignen sich gut fuer spielerische Empty States oder Onboarding-Hinweise.',
      gifAlt: 'Happy Animation',
    },
  },
} as const