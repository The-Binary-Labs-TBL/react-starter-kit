import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './app/App.tsx'
import { AppProviders } from './providers/AppProviders.tsx'

import './styles/global.css'
import './styles/themes/root-midnight.css'
import './styles/themes/root-sunrise.css'
import './styles/homepage/homepage.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProviders>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppProviders>
  </StrictMode>
)