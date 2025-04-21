import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Layout from './pages/layout'
import BackgroundSvg from './components/background'
import ShopCard from './pages/shopCard'
import LazyRouterElement from './router'
// import Auth from './pages/auth/Login'

function App() {

  return (
    <>
    <LazyRouterElement/>
         </>
  )
}

export default App
