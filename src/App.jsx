import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import Header from './Header/Header'
import Main from './Main/Main'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Main/>
  </StrictMode>,
)
