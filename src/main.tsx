import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppContainerProvider from './app-container-provider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppContainerProvider />
  </StrictMode>,
)
