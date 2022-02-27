import React, { useEffect, useRef } from 'react'
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
import Testimonial from "../components/Testimonial"
import { textIntro, fadeIn } from "../helpers/Animation"
// import Loader from "../components/Loader"
const AboutPage = () => {
  let heading1 = useRef(null)
  let heading2 = useRef(null)
  let para = useRef(null)
  let heading3 = useRef(null)
  let icons = useRef(null)
  let list1 = useRef(null)
  let list2 = useRef(null)
  let list3 = useRef(null)
  let experience = useRef(null)
  let heading4 = useRef(null)
  let article = useRef(null)
  let article1 = useRef(null)
  useEffect(() => {
    textIntro([heading1, heading2, para, heading3, icons])
    fadeIn([list1, list2, list3])
    fadeIn(experience)
    fadeIn([heading4])
    fadeIn([heading4, article, article1])
    window.scroll(0, 0)
  }, [])
  return (
    <>
      {/* <Loader /> */}
      <section className="about__page">
        <div className="about__description">
          <h5 ref={el => heading1 = el}>A FEW WORDS ABOUT ME</h5>
          <h3 ref={el => heading2 = el}>
            I’m Abdul malek, a <span>Frontend-developer & UI/UX designer </span> who focuses on
            telling stories visually, through <span>minimalistic </span> and clear way. I design and develop <span>responsive websites </span>and functional user friendly interfaces.
          </h3>
          <p ref={el => para = el}>
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
            <h3 ref={el => heading3 = el}>LANGUAGES & TOOLS I DO USE</h3>
          </div>
          <div className="languages" ref={el => icons = el}>
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
          <div
            ref={el => list1 = el}
            className="tools__left">
            <h5>DEVELOPMENT SERVICES</h5>
            <h4>
              Responsive Website / Minimalistic Website / Agency Website / Animation
            </h4>
          </div>
          <div
            ref={el => list2 = el}
            className="tools__middle">
            <h5>DESIGN SERVICES</h5>
            <h4>
              Art direction / Web & Mobile / UX & UI / Typography / Interface / Iconography
            </h4>
          </div>
          <div
            ref={el => list3 = el}
            className="tools__right">
            <h5>TOOLS I USE</h5>
            <h4>VS code / Firebase / Figma / Pen & paper / Type Scaler / Google fonts</h4>
          </div>
        </div>
        <Testimonial />
        <div className="experience"
          ref={el => experience = el}>
          <h5>EXPERIENCE</h5>
          <h3>Over 3 years of experience</h3>
          <p>
            I’ve been lucky enough to establish relationships with amazing clients
            from all over the world, ranging from individual clients, through
            up-and-coming startups, to multinational companies. For more details,
            head over to my <a href="https://www.linkedin.com/in/zihadm654">Linkedin profile</a>
          </p>
        </div>
        <div className="principles">
          <h4 ref={el => heading4 = el}>Principles I do use?</h4>
          <div className="principle"
            ref={el => article = el}
          >
            <div className="principle__title">
              <h5>For design purposes</h5>
            </div>
            <article>
              <h5>Grid System</h5>
              <p>I use mostly grid system. <span> Grid system</span> is a way which can make your design so much clean and align can be so much perfect. I use the <span>
                12 grid.</span> So, it helps me to divide the design into <span> 3 parts.</span></p>
            </article>
            <article>
              <h5>Component Style</h5>
              <p>I like to use small components and resuse most of the time. That way i can be consistent with design and make work easier. And most importantly this approach can save time <span> small components</span> And component is like varible if i change one it will be changed all at one.</p>
            </article>
          </div>
          <div className="principle development"
            ref={el => article1 = el}>
            <div className="principle__title">
              <h5>For Development purposes</h5>
            </div>
            <article>
              <h5>Bem naming convention</h5>
              <p>In development part. When i write Html i probably use <span> BEM </span>naming convention to call the classes of html elements. It helps me when i style website with SCSS. I can use nested style and <span> & percentage.</span></p>
            </article>
            <article>
              <h5>Small components</h5>
              <p>By Small components i ment simply dividing my big problems into small parts.<span> Simpilicity</span> is the king in every aspect of our life. <span> small components</span> saves a lot of time and make work more productive.</p>
            </article>
          </div>
        </div>
        <CheckOut />
      </section >
    </>
  )
}

export default AboutPage
