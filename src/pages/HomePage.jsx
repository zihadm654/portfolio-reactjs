import React, { useEffect } from 'react'
import Hero from '../layouts/Hero'
import Describe from '../layouts/Describe'
import Projects from '../layouts/Projects'
import Progress from '../layouts/Progress'
import Skills from '../layouts/Skills'
import About from '../layouts/About'
const HomePage = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <main>
      <Hero />
      <Describe />
      <Projects />
      <Progress />
      <Skills />
      <About />
    </main>
  )
}

export default HomePage
