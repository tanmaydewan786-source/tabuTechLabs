import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/noto-sans/latin-400.css'
import '@fontsource/noto-sans/devanagari-400.css'
import '@fontsource/noto-serif/latin-700.css'
import '@fontsource/noto-serif/latin-700-italic.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
