import React, { useEffect } from 'react'
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiReact,
  SiGithub,
  SiGit,
  SiWebpack,
  SiGreensock,
  SiFirebase,
} from 'react-icons/si'
import CheckOut from '../components/CheckOut'
import Testimonial from "../layouts/Testimonial"
const AboutPage = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <section className="about__page">
      <div className="about__description">
        <h5>A FEW WORDS ABOUT ME</h5>
        <h3>
          I’m Abdul Malik, a <span>Frontend-developer & UI/UX designer </span> who focuses on
          telling stories visually, through <span>minimalistic </span> and clear way. I design and develop <span>responsive websites </span>and functional user friendly interfaces.
        </h3>
        <p>
          Over the past 3 years I have been working and as a rising startups
          around the world as a developer and designer, working solo. In my
          spare time I enjoy to see sunset and adventures.
        </p>
      </div>
      <div
        className="about__slider">
      </div>

      <div className="language__container">
        <div className="language__title">
          <h3>LANGUAGES & TOOLS I DO USE</h3>
        </div>
        <div className="languages">
          <SiReact className="language react" />
          <SiJavascript className="language javascript" />
          <SiSass className="language scss" />
          <SiHtml5 className="language html" />
          <SiCss3 className="language css" />
          <SiGithub className="language" />
          <SiGit className="language git" />
          <SiWebpack className="language webpack" />
          <SiGreensock className="language gsap" />
          <SiFirebase className="language firebase" />
        </div>
      </div>
      <div className="tools">
        <div className="tools__left">
          <h5>DEVELOPMENT SERVICES</h5>
          <h4>
            Responsive Website / Minimalistic Website / Agency Website / Animation
          </h4>
        </div>
        <div className="tools__middle">
          <h5>DESIGN SERVICES</h5>
          <h4>
            Art direction / Web & Mobile / UX & UI / Typography / Interface / Iconography
          </h4>
        </div>
        <div className="tools__right">
          <h5>TOOLS I USE</h5>
          <h4>VS code / Firebase / Figma / Pen & paper / Type Scaler / Google fonts</h4>
        </div>
      </div>
      <Testimonial />
      <div className="experience">
        <h5>EXPERIENCE</h5>
        <h3>Over 3 years of experience</h3>
        <p>
          I’ve been lucky enough to establish relationships with amazing clients
          from all over the world, ranging from individual clients, through
          up-and-coming startups, to multinational companies. For more details,
          head over to my <a href="https://www.linkedin.com/in/zihadm654">Linkedin profile</a>
        </p>
      </div>
      <CheckOut />
    </section >
  )
}

export default AboutPage
