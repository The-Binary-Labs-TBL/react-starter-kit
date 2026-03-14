export const enEN = {
  controls: {
    languageLabel: 'Language',
    themeLabel: 'Theme',
  },
  homepage: {
    sectionsLabel: 'Starter kit overview',
    hero: {
      eyebrow: 'React Starter Kit',
      title: 'Start shipping faster with a beginner-friendly foundation.',
      description:
        'This template keeps the setup approachable while still showing how routing, reusable styling, assets, and service layers fit together in a real React project.',
      highlightsLabel: 'Starter kit highlights',
      highlights: [
        'TypeScript ready',
        'React Router included',
        'Easy to extend structure',
      ],
      primaryCta: {
        label: 'Open React Docs',
        href: 'https://react.dev/learn',
      },
      secondaryCta: {
        label: 'Open Vite Guide',
        href: 'https://vite.dev/guide/',
      },
    },
    stack: {
      kicker: 'What is included',
      title: 'A small stack that teaches good habits early',
      description:
        'Each block gives beginners a clear place to continue from instead of leaving them with a demo counter and no direction.',
      items: [
        {
          title: 'React 19',
          description: 'Build pages from reusable UI pieces and stateful interactions.',
          logo: 'react',
        },
        {
          title: 'Vite 8',
          description: 'Run a fast development server and keep the build setup simple.',
          logo: 'vite',
        },
        {
          title: 'Project Identity',
          description: 'Use your own icon, fonts, images, and starter branding from day one.',
          logo: 'icon',
        },
      ],
    },
    connection: {
      kicker: 'Placeholder service layer',
      title: 'Simulate online and offline frontend states',
      description:
        'The toggle below uses a fake API service so beginners can see how UI state changes when data comes back differently.',
      onlineButton: 'Switch to offline preview',
      offlineButton: 'Switch to online preview',
      loadingBadge: 'Checking service',
      loadingTitle: 'Loading starter preview...',
      loadingDescription: 'Fetching placeholder data from the demo service layer.',
      loadingMeta: 'Preparing response',
      responses: {
        online: {
          badge: 'API online',
          title: 'Connected to a placeholder endpoint',
          description:
            'Your frontend can behave as if a backend answered successfully and returned starter content.',
          meta: 'Mock latency: 180ms',
        },
        offline: {
          badge: 'Offline mode',
          title: 'Showing fallback frontend behaviour',
          description:
            'The same UI can now explain missing connectivity and still stay understandable for the user.',
          meta: 'Fallback source: local placeholder',
        },
      },
      checklist: [
        'Good place to swap in a real backend later',
        'Simple enough to understand without extra libraries',
        'Useful for loading, error, and empty-state exercises',
      ],
    },
    resources: {
      kicker: 'Documentation',
      title: 'Helpful links for the next learning step',
      description:
        'Keep a few trusted references close so new developers know where to continue reading after the template is running.',
      links: [
        {
          label: 'React Learn',
          description: 'Understand components, props, hooks, and rendering fundamentals.',
          href: 'https://react.dev/learn',
          logo: 'react',
        },
        {
          label: 'Vite Guide',
          description: 'See how the dev server, assets, and build pipeline are organized.',
          href: 'https://vite.dev/guide/',
          logo: 'vite',
        },
      ],
    },
    assets: {
      kicker: 'Assets in use',
      title: 'This homepage touches icons, images, GIFs, and custom fonts',
      description:
        'The starter demonstrates common frontend asset types right away so new projects can copy the pattern instead of guessing.',
      iconTitle: 'Icon example',
      iconDescription: 'The favicon is reused inside the UI as a lightweight product marker.',
      iconAlt: 'Starter kit icon',
      imageTitle: 'Image example',
      imageDescription: 'A hero image can anchor a section and make the landing area feel intentional.',
      imageAlt: 'Starter kit hero graphic',
      gifTitle: 'GIF example',
      gifDescription: 'Animated assets can be useful for playful empty states or onboarding hints.',
      gifAlt: 'Happy animation',
    },
  },
} as const