import React from 'react'
import ReactDOM from 'react-dom/client'
import { MapsApp } from './MapsApp'

if (!navigator.geolocation) {
  alert('Tu navegador no tiene opción de Geolocalización')
  throw new Error('Tu navegador no tiene opción de Geolocalización')
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
)
