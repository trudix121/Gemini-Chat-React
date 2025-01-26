import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AIChatLayout from './Chat'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AIChatLayout />
  </StrictMode>,
)
