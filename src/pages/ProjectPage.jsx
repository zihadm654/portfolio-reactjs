import React, { useEffect } from 'react'
import Cards from '../components/Cards'

const ProjectPage = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <section className="projects">
      <div className="projects__title">
        <h3>
          Shaping world class websites in a practical manner.
        </h3>
        <p>
          I can help you successfully take your business online while
          assisting you throughout the building process.
        </p>
      </div>
      <h3>Featured projects</h3>
      <Cards />
    </section>
  )
}

export default ProjectPage
