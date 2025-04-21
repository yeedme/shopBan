import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter } from 'react-router-dom'
//配置router 
createRoot(document.getElementById('root')).render(
  <StrictMode>

   <BrowserRouter>
      <App />
   </BrowserRouter>
    

  </StrictMode>,
)
