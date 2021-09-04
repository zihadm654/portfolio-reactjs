import React, { useEffect } from 'react'
import Loader from '../components/Loader'
import Cards from '../components/Cards'

const ProjectPage = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <section className="project">
      <Loader />
      <div className="project__title">
        <h2>
          Shaping world class websites in a practical manner.
        </h2>
        <p>
          I can help you successfully take your business online while
          assisting you throughout the building process.
        </p>
      </div>
      <h3>Featured project</h3>
      <Cards />
    </section>
  )
}

export default ProjectPage
