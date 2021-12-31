import React, { useState, useEffect } from 'react'
import Cards from '../components/Cards'
import { db } from "../lib/firebase"
import { collection, getDocs } from 'firebase/firestore'

const ProjectPage = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await getDocs(collection(db, "projects"))
      const data = res.docs.map(doc => {
        return {
          ...doc.data(),
          id: doc.id
        }
      })
      setProjects(data)
    }
    fetchData()
  }, []);
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
      <div className="project__container">
        <div className="cards">
          {projects?.map(({ title, img, description, id }) => (
            <Cards
              key={id}
              img={img}
              title={title}
              id={id}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectPage
