import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import About from './components/about.jsx'
import Skills from './components/skills.jsx'
import profile from "./data/profile";

function App() {
  return(
    <main>
   <h1>Jemuel Villaret</h1>
   <Skills/>
   <About/>
<p>{profile.socialLinks.Facebook}</p>
<p>{profile.socialLinks.Github}</p>
    </main>

  )
}

export default App
