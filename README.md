# React Starter Kit

A minimal React starter kit with TypeScript, React Router, a language manager, a theme manager, and a tiny mock API example.

The project is intentionally small.
It is meant to be easy to read, easy to extend, and a clean base for new projects.

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

## What Is Included

- React + TypeScript
- React Router base setup
- language handling via React Context
- theme handling via React Context
- persistence with `localStorage`
- themes with CSS variables
- a small mock API example for loading and fallback states

## Project Structure

- `src/app` for app shell and router
- `src/pages` for pages
- `src/contexts` for language and theme state
- `src/config` for central app settings
- `src/locales` for translation content
- `src/services` for API or mock logic
- `src/styles` for global styles, themes, and page CSS

The homepage is only a small preview page.
You can replace it at any time.

## Language And Theme

The most important setup file is:

- `src/config/app-settings.ts`

It contains:

- storage keys
- default language
- default theme
- available languages
- available themes
- switcher labels

### Change The Default Language Or Theme

Edit `src/config/app-settings.ts`:

```ts
defaults: {
  language: 'en-EN',
  theme: 'sunrise',
}
```

### Add A New Language

1. Create a new locale file in `src/locales`.
2. Import it in `src/config/app-settings.ts`.
3. Add it to the `languages` array.

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

### Add A New Theme

1. Create a new CSS file in `src/styles/themes`.
2. Import it in `src/main.tsx`.
3. Add it to the `themes` array in `src/config/app-settings.ts`.

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
  --app-bg: #102018;
  --app-surface: #163124;
  --app-surface-muted: #1d3d2d;
  --app-border: rgba(255, 255, 255, 0.08);
  --app-text: #edf7ef;
  --app-muted: #b7cbbb;
  --app-accent: #7fd59a;
  --app-accent-contrast: #0d1812;
  --app-shadow:
    0 24px 60px rgba(0, 0, 0, 0.24),
    0 10px 28px rgba(0, 0, 0, 0.16);
}
```

## Homepage Styling

The homepage styles are split into two files:

- `src/styles/homepage/homepage-layout.css` for structure and spacing
- `src/styles/homepage/homepage-style.css` for colors and visual styling

`src/styles/homepage/homepage.css` only imports both files.

## Relevant Files

- `src/pages/HomePage.tsx`
- `src/services/api.tsx`
- `src/config/app-settings.ts`
- `src/contexts/LanguageContext.tsx`
- `src/contexts/ThemeContext.tsx`
- `src/locales/de-DE.ts`
- `src/locales/en-EN.ts`
- `src/styles/global.css`
- `src/styles/themes/root-midnight.css`
- `src/styles/themes/root-sunrise.css`

## Idea Behind This Starter

This starter kit stays small on purpose.

It prefers:

- simple files over heavy abstraction
- CSS variables over larger theme systems
- React Context over extra state libraries
- one central config over scattered setup

If your project grows, you can build on top of it.
The foundation should still stay clear and easy to understand.