import React, { useRef, useEffect } from 'react'
import { describe } from "../helpers/Animation"
import { Link } from 'react-router-dom'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { projectData } from "../data/projectData.js"

const Cards = () => {
  // const [project, setProject] = useState(false)
  let wrapper = useRef(null)
  useEffect(() => {
    describe(wrapper)
    window.scroll(0, 0)
  }, [])
  return (
    <div className="project__container">

      <div className="cards">
        {projectData.map((project, index) => {
          return (
            <main
              key={index}
              ref={(el) => (wrapper = el)}
              className="card__wrapper">
              <Link to={"/projects/" + project.slug} className="link">
                <div className="image__container">
                  <img src={project.Img} alt={project.Img} />
                </div>
              </Link>
              <div className="card__text">
                <h5>{project.title}</h5>
                <p>{project.description}</p>
                <Link to={"/projects/" + project.slug} className="link">
                  See case study
                  <HiOutlineArrowRight className="icon" />
                </Link>
              </div>
            </main>
          )
        })}
      </div>
    </div>
  )
}
export default Cards