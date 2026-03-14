# React Starter Kit

A small React starter kit with TypeScript, React Router, a demo homepage, a simple language manager, and a simple theme manager.

This project is intentionally kept simple.
No extra i18n library, no theme framework, and no overly complex app architecture.
Just a clean structure that is easy to understand and easy to extend.

## Start

```bash
npm install
npm run dev
```

Other commands:

```bash
npm run build
npm run lint
npm run preview
```

## Project Idea

This starter kit shows a simple standard structure for small to medium React projects:

- `src/app` for the app shell and router
- `src/pages` for pages
- `src/services` for API or mock logic
- `src/styles` for global styles, themes, and page CSS
- `src/locales` for language content
- `src/contexts` for global managers like language and theme
- `src/config` for central settings

The homepage is only a demo page.
You can delete or replace it at any time.

## Language And Theme Manager

Both are intentionally minimal:

- language via React Context
- theme via React Context
- persistence via `localStorage`
- themes via CSS variables
- everything configured centrally in one file

The most important file for this is:

- `src/config/app-settings.ts`

It contains:

- storage keys
- default language
- default theme
- available languages
- available themes
- switcher labels

## How To Use It

### Change The Default Language Or Default Theme

File:

- `src/config/app-settings.ts`

Section:

```ts
defaults: {
  language: 'en-EN',
  theme: 'midnight',
}
```

This controls what is used on the first load.

### Add A New Language

1. Create a new locale file inside `src/locales`.
2. Import that file in `src/config/app-settings.ts`.
3. Add the language to `languages`.

Example:

```ts
import { frFR } from '../locales/fr-FR'

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
  {
    code: 'fr-FR',
    htmlLang: 'fr',
    switcherLabel: 'FR',
    messages: frFR,
  },
]
```

Important:
The actual text always lives inside the locale file.
The central config only connects the code, label, and message object.

### Add A New Theme

1. Create a new CSS file inside `src/styles/themes`.
2. Import the CSS file in `src/main.tsx`.
3. Add the theme to `themes` in `src/config/app-settings.ts`.

Example config:

```ts
themes: [
  {
    id: 'midnight',
    switcherLabel: 'Midnight',
  },
  {
    id: 'sunrise',
    switcherLabel: 'Sunrise',
  },
  {
    id: 'forest',
    switcherLabel: 'Forest',
  },
]
```

Example theme file:

```css
:root[data-theme='forest'] {
  --homepage-bg: #102018;
  --homepage-surface: #163124;
  --homepage-surface-alt: #1d3d2d;
  --homepage-border: rgba(255, 255, 255, 0.08);
  --homepage-text: #edf7ef;
  --homepage-muted: #b7cbbb;
  --homepage-accent: #7fd59a;
  --homepage-accent-strong: #98e7af;
  --homepage-accent-contrast: #0d1812;
  --homepage-focus: rgba(127, 213, 154, 0.35);
  --homepage-shadow:
    0 24px 60px rgba(0, 0, 0, 0.24),
    0 10px 28px rgba(0, 0, 0, 0.16);
}
```

## Relevant Files

- `src/config/app-settings.ts`: central language and theme settings
- `src/contexts/LanguageContext.tsx`: language manager
- `src/contexts/ThemeContext.tsx`: theme manager
- `src/locales/de-DE.ts`: German locale file
- `src/locales/en-EN.ts`: English locale file
- `src/styles/themes/root-midnight.css`: first theme
- `src/styles/themes/root-sunrise.css`: second theme
- `src/pages/HomePage.tsx`: demo page with the switchers

## Why It Stays Simple

Many starter kits become too large too quickly.
This one is meant to stay a small, clean foundation.

That is why the project prefers:

- clear files over too much abstraction
- CSS variables over large theme systems
- simple contexts over many libraries
- one central config over values scattered across many files

If you need more later, you can build on top of it.
But the core idea stays the same: easy to understand, easy to start, easy to extend.