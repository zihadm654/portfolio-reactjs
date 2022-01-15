import React, { useState, useEffect, useRef } from 'react'
import Cards from '../components/Cards'
import { db } from "../lib/firebase"
import { collection, getDocs } from 'firebase/firestore'
import { textIntro } from '../helpers/Animation'
import Loader from "../components/Loader"
const ProjectPage = () => {
  const [projects, setProjects] = useState([])
  let head = useRef(null)
  let para = useRef(null)
  useEffect(() => {
    textIntro([head, para])
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
  if (!projects) {
    return <h5>Fetching data from firebase</h5>
  }
  return (
    <>
      <Loader />
      <section className="projects">
        <div className="projects__title">
          <h3 ref={el => head = el}>
            Shaping world class websites in a practical manner.
          </h3>
          <p ref={el => para = el}>
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
    </>
  )
}

export default ProjectPage
