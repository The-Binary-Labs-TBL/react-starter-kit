export const enEN = {
  controls: {
    languageLabel: 'Language',
    themeLabel: 'Theme',
  },
  homepage: {
    controlsLabel: 'App settings',
    eyebrow: 'React Starter Kit',
    title: 'A minimal base for React projects.',
    description:
      'Only the essentials are included here: language, theme and one small API test area.',
    structure: {
      title: 'Standard structure',
      description: 'Use `pages`, `contexts`, `styles` and `services` as the base folders for the project.',
    },
    api: {
      title: 'Test API',
      description: 'A tiny mock request to verify loading states and basic service usage.',
      onlineAction: 'Switch to online',
      offlineAction: 'Switch to offline',
      loadingTitle: 'Loading response...',
      loadingDescription: 'The mock service is preparing a result.',
      loadingMeta: 'Request running',
      responses: {
        online: {
          badge: 'Online',
          title: 'Service available',
          description: 'The mock API returned a successful starter response.',
          meta: 'Mode: online',
        },
        offline: {
          badge: 'Offline',
          title: 'Fallback active',
          description: 'The mock API returned a local fallback response.',
          meta: 'Mode: offline',
        },
      },
    },
  },
} as const