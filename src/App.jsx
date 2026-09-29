import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import About from './components/about.jsx'
import Skills from './components/skills.jsx'
function App() {
  return(
    <main>
   <h1>Jemuel Villaret</h1>
   <Skills/>
   <About/>
    </main>

  )
}

export default App
