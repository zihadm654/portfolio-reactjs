import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc } from 'firebase/firestore';
import { db } from "../lib/firebase"
import { HiOutlineArrowRight } from 'react-icons/hi'

const CaseDetails = () => {
  const [project, setProject] = useState(null);
  const { slug } = useParams()
  const id = slug

  useEffect(() => {
    const fetchData = async () => {
      const projectRef = doc(db, "projects", id)
      const snapshot = await getDoc(projectRef)
      const projectSnap = {
        ...snapshot.data(),
        id: snapshot.id,
      }
      setProject(projectSnap);
    }
    fetchData()
  }, [id])

  if (!project) return <div>Loading...</div>
  return (
    <section className="case__details">
      <div className="container">
        <div className="case__study--left">
          <div className="context">
            <p>Case Study</p>
            <h4>{project.title}</h4>
          </div>
          <div className="context">
            <p>My Role</p>
            {project.role.map((item, i) => (
              <h5 key={i}>{item}</h5>
            ))}
          </div>
          <div className="context">
            <p>Client</p>
            <h5>{project.client}</h5>
          </div>
          <div className="context">
            <p>Year</p>
            <h5>{project.time}</h5>
          </div>
        </div>
        <div className="case__study--right">
          <h5>{project.description}</h5>
          <div className="links">
            <div className="link">
              <a href={project.site} target="_blank"
                rel="noreferrer">
                Live site
                <HiOutlineArrowRight className="icon" />
              </a>
            </div>
            <div className="link repo">
              <a href={project.repo} target="_blank"
                rel="noreferrer">
                Code preview
                <HiOutlineArrowRight className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="img__wrapper">
        <img src={project.img} alt={project.img} />
      </div>
    </section>
  )
}

export default CaseDetails
