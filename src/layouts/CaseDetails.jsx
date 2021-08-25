import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { projectsData } from '../data/projectData.js'
const CaseDetails = () => {
  const [project, setProject] = useState(null);
  const { slug } = useParams()
  useEffect(() => {
    const newArray = projectsData.find(array => array.slug === slug)
    setProject(newArray)
  }, [slug])

  if (!project) return <div>Loading...</div>
  return (
    <section className="case__details">
      <div className="case__study">
        <h2>Case Study</h2>
        <p>Dividing projects into parts</p>
      </div>
      <div className="container">
        <div className="img__wrapper">
          <img src={project.Img} alt={project.Img} />
        </div>
        <div className="content">
          <h4>{project.name}</h4>
          <p>{project.description}</p>
        </div>
      </div>
    </section>
  )
}

export default CaseDetails
