import React, { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom"
import Button from '../helpers/Button'
import Footer from '../components/Footer'
import { VerticalScroll } from '../helpers/Animation'
const Contact = () => {

  let line1 = useRef(null)
  let line2 = useRef(null)
  useEffect(() => {
    VerticalScroll([line1, line2])
  }, [])
  const [info, setInfo] = useState(false)
  return (
    <>
      <section className="contact">
        <div className="contact__title">
          <h4 ref={el => line1 = el}>Got a project?</h4>
          <h3 ref={el => line2 = el}>Let's work together</h3>
        </div>
        <div className="callaction">
          <Button site={'/contact'}
            className={'primary__btn'} text={'Book a free consultation'} />
          <Button site={'/contact'}
            className={'custom__btn'} text={'send an email me'} />
        </div>
        <div className="media">
          <div className="social__media">
            <Link
              to={{ pathname: 'https://dribbble.com/zihadm654' }}
              target="_blank"
            >
              Dribbble
            </Link>
            <Link to={{ pathname: 'https://www.behance.net/zihadm654/' }} target="_blank">
              Behance
            </Link>
            <Link to={{ pathname: 'https://instagram.com/zihadm65' }} target="_blank">
              Instagram
            </Link>
            <Link
              to={{ pathname: 'https://github.com/zihadm654' }}
              target="_blank"
            >
              Github
            </Link>
            <Link
              to={{ pathname: 'https://www.linkedin.com/in/zihadm654' }}
              target="_blank"
            >
              Linkdin
            </Link>
          </div>
          <hr />
          <div className="copyright">
            <p>
              &copy; 2021 Abdul malek || Made in
              {' '}
              <span
                className={info ? "active" : ""}
                onClick={() => { setInfo(!info) }}>Info.
              </span>
            </p>
            <p className="lang">
              {info ? 'Reactjs Scss React-Icons Gsap Vscode' : ''}
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact
