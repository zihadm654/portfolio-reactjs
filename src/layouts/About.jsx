import React, { useRef, useEffect } from 'react'
import Icon from '../helpers/Icon'
import { fadeIn } from '../helpers/Animation'
import { HiOutlineArrowRight } from 'react-icons/hi'
const About = () => {
  let heading1 = useRef(null)
  let heading2 = useRef(null)
  let para = useRef(null)
  useEffect(() => {
    fadeIn([heading1, heading2, para])
  }, [])

  return (
    <div className="about">
      <div className="about__wrapper">
        <div className="about__description">
          <h5 ref={el => heading1 = el}>Hi, I’m Abdul Malik</h5>
          <h3 ref={el => heading2 = el}>Frontend-developer & UI/UX designer.</h3>
          <p ref={el => para = el}>
            My journey as a self taught frontend developer with designing experience. As a self taught frontend developer it take a lot of dedications. <br /> Skills:- Reactjs, Javascript, Scss, Html, Css, Gsap, Github, Git.
          </p>
          <div className="cta">
            <Icon
              linkName={"/about"}
              text="About me" />
            <div className='link cv'>
              <a href="https://docs.google.com/document/d/1z2lCR3x9aEEg1YDav3IPXd1pWVGJp4LcqYB__BJwdPQ/export?format=pdf" download>Download CV <HiOutlineArrowRight className='icon' /></a>
            </div>
          </div>
        </div>
        <div className="img__wrapper">
        </div>
      </div>
    </div>
  )
}
export default About
