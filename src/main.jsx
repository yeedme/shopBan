import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter, HashRouter } from 'react-router-dom'
//配置router 
createRoot(document.getElementById('root')).render(
  <StrictMode>

   <HashRouter>
      <App />
   </HashRouter>
    

  </StrictMode>,
)
