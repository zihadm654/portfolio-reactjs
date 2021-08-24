import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Button from '../helpers/Button'
import Footer from '../components/Footer'
const Contact = () => {
  const [info, setInfo] = useState(false)
  return (
    <>
      <section className="contact">
        <div className="contact__title">
          <h5>Got a project?</h5>
          <h3>Let's work together</h3>
        </div>
        <div className="callaction">
          <Button site={'/contact'}
            className={'primary__btn'} text={'Book a free consultation'} />
          <Button site={'/contact'}
            className={'custom__btn'} text={'or send an email me'} />
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
              to={{ pathname: 'https://www.linkedin.com/in/Abdul -malek-a095031a4/', }}
              targaet="_blank"
            >
              Linkdin
            </Link>
          </div>
          <hr />
          <div className="copyright">
            <p>
              &copy; 2021 Abdul Malik || Made in
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
