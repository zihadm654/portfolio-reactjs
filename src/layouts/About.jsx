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
          <h3>Frontend-developer & UI/UX designer.</h3>
          <p>
            My journey as a self taught frontend developer with designing experience. As a self taught frontend developer it take a lot of dedications. <br /> Skills:- Reactjs, Javascript, Scss, Html, Css, Gsap, Github, Git.
          </p>
          <Icon
            linkName={"/about"}
            text="more about me" />
        </div>
      </div>
    </div>
  )
}
export default About
