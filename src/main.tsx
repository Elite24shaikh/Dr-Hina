import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import PrivacyPolicy from './privacypolicy/App.tsx'
import DeleteAccount from './deleteaccount/App.tsx'

const isPrivacyPolicyRoute = window.location.pathname.replace(/\/$/, '') === '/privacypolicy'
const isDeleteAccountRoute = window.location.pathname.replace(/\/$/, '') === '/deleteaccount'

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      {isPrivacyPolicyRoute ? <PrivacyPolicy /> : isDeleteAccountRoute ? <DeleteAccount /> : <App />}
    </StrictMode>,
  )
}
