import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Layout from './components/layout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout>
        <App />
    </Layout>
  </StrictMode>,
)
