import React, { useRef, useEffect } from 'react'
import Icon from '../helpers/Icon'
import { HorizontalScroll } from '../helpers/Animation'

const About = () => {
  let container = useRef(null)

  useEffect(() => {
    HorizontalScroll(container)
  }, [])

  return (
    <div className="about">
      <div className="about__wrapper">
        <div ref={(el) => (container = el)} className="img__wrapper"></div>
        <div className="about__description">
          <h5>Hi, I’m Abdul Malik</h5>
          <h3>Frontend-developer & UI/UX designer Crafting projects</h3>
          <p>
            My journey from an Arts Student to a Front-end developer with
            designing experience.
          </p>

          <Icon linkName={"/story"}
            text="read my story" />

        </div>
      </div>
    </div>
  )
}
export default About
