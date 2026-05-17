import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Manifest from './ui/Manifest'
import App from './ui/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < Manifest />
  </StrictMode>,
)
