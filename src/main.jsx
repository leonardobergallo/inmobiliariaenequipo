import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { registerServiceWorker } from './utils/pwa.js'

// Registrar Service Worker para PWA
registerServiceWorker()

// Detectar evento de instalación
let deferredPrompt
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault()
  deferredPrompt = e
  window.deferredPrompt = e
  console.log('App lista para instalar')
  
  // Opcional: Mostrar botón de instalación
  const installButton = document.createElement('button')
  installButton.textContent = '📱 Instalar App'
  installButton.className = 'fixed bottom-20 right-4 z-50 bg-primary text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors md:hidden'
  installButton.onclick = () => {
    deferredPrompt.prompt()
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Usuario instaló la app')
      }
      deferredPrompt = null
      installButton.remove()
    })
  }
  document.body.appendChild(installButton)
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

