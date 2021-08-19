import React, { useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import gsap from 'gsap'
import {
  staggerReveal,
  staggerRevealClose,
  fadeInUp,
  Links
} from '../helpers/Animation'

const Hamburger = ({ menu }) => {
  let burger = useRef(null)
  let revealMenu = useRef(null)
  let revealMenuBackground = useRef(null)
  let info = useRef(null)
  let list1 = useRef(null)
  let list2 = useRef(null)
  let list3 = useRef(null)
  let list4 = useRef(null)
  let list5 = useRef(null)

  useEffect(() => {
    if (menu) {
      gsap.to(burger, {
        duration: 1,
        css: { display: 'none' },
      })
      staggerRevealClose(revealMenu, revealMenuBackground)
    } else if (!menu) {
      gsap.to(burger, {
        duration: 0,
        css: { display: 'block' },
      })
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0,
        opacity: 1,
        height: '100%',
      })
      staggerReveal(revealMenu, revealMenuBackground)
      fadeInUp(info)
      Links([list1, list2, list3, list4, list5])
    }
  }, [menu])

  return (
    <div ref={(el) => (burger = el)} className={!menu ? "hamburger menu" : "hamburger"}>
      <div
        ref={(el) => (revealMenu = el)}
        className="secondary__background"
      ></div>
      <div ref={(el) => (revealMenuBackground = el)} className="menu__layer">
        <div className="container">
          <div className="wrapper">
            <div className="menu__links">
              <nav className="navbar">
                <ul className="nav__links">
                  <li ref={(el) => (list1 = el)}>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li ref={(el) => (list2 = el)}>
                    <NavLink to="/projects">Projects</NavLink>
                  </li>
                  <li ref={(el) => (list3 = el)}>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li ref={(el) => (list4 = el)}>
                    <NavLink to="/blogs">Blogs</NavLink>
                  </li>
                  <li ref={(el) => (list5 = el)}>
                    <NavLink to="/story">Story</NavLink>
                  </li>
                </ul>
              </nav>
              <div className="info" ref={(el) => (info = el)}>
                <h4>My Promise</h4>
                <p>
                  I Promise you that you will not feel boaring working with me.
                  You will be comfortable with me in communication.I will try my
                  level best to give good service on time at a low cost.
                </p>
              </div>
            </div>
          </div>
          <div className="social__media">
            <NavLink
              to={{ pathname: 'https://dribbble.com/zihadm654' }}
              target="_blank"
            >
              Dribbble
            </NavLink>
            <NavLink to={{ pathname: 'https://behance.net/zihadm654' }} target="_blank">
              Behance
            </NavLink>
            <NavLink to={{ pathname: 'https://instagram.com/zihadm654' }} target="_blank">
              Instagram
            </NavLink>
            <NavLink
              to={{ pathname: 'https://github.com/zihadm654' }}
              target="_blank"
            >
              Github
            </NavLink>
            <NavLink
              to={{
                pathname: 'https://www.linkedin.com/in/Abdul -malek-a095031a4/',
              }}
              target="_blank"
            >
              Linkdin
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hamburger
