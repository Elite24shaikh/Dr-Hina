import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import PrivacyPolicy from './privacypolicy/PrivacyPolicy.tsx'

const isPrivacyPolicyRoute = window.location.pathname.replace(/\/$/, '') === '/privacypolicy'

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      {isPrivacyPolicyRoute ? <PrivacyPolicy /> : <App />}
    </StrictMode>,
  )
}
