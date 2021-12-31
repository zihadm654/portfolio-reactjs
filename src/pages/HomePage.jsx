import React, { useEffect, useRef } from 'react'
import Hero from '../layouts/Hero'
import Describe from '../layouts/Describe'
import Projects from '../layouts/Projects'
import Progress from '../layouts/Progress'
import Skills from '../layouts/Skills'
import About from '../layouts/About'
// import Loader from "../components/Loader"
import { BsArrowUp } from 'react-icons/bs'
import { up } from '../helpers/Animation'

const HomePage = () => {
  const elevator = () => {
    window.scroll(0, 0)
  }
  let arrow = useRef(null)
  useEffect(() => {
    window.scroll(0, 0)
    up([arrow])
  }, [])
  return (
    <>
      <main>
        {/* <Loader /> */}
        <Hero />
        <Describe />
        <Projects />
        <Progress />
        <Skills />
        <About />
      </main>
      <div
        ref={el => arrow = el}
        onClick={elevator}
        className="up">
        <BsArrowUp />
      </div>
    </>
  )
}

export default HomePage
