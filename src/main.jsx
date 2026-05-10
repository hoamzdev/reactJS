import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './ui/App'
import Home from './ui/Home'
import Exam from './ui/Exam'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    < Exam />
  </StrictMode>,
)
