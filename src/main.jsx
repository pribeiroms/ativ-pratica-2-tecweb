import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PresentesProvider } from './PresentesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PresentesProvider>
      <App />
    </PresentesProvider>
  </StrictMode>,
)
