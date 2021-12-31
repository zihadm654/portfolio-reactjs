import React, { useRef, useEffect } from 'react'
import Button from '../helpers/Button'
import Cards from '../components/Cards'
import { fadeIn } from "../helpers/Animation"

const Projects = () => {
  let title = useRef(null)
  let subTitle = useRef(null)
  useEffect(() => {
    fadeIn([title, subTitle])
  }, [])
  return (
    <section
      className="project">
      <div className="project__title">
        <h2
          ref={(el) => (title = el)}
        >Selected Projects</h2>
        <p ref={(el) => (subTitle = el)}>
          Designed seamless interfaces, Built beautiful websites, & Composed
          inspiring animations.
        </p>
      </div>
      <Cards />
      <Button
        site={"/projects"}
        className='secondary__btn' text='see more work' />
    </section>
  )
}
export default Projects
