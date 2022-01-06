import React, { useRef, useEffect } from 'react'
import Button from '../helpers/Button'
import { textIntro } from '../helpers/Animation'

import Image from '../assets/available.svg'

const Hero = () => {
  let heading = useRef(null)
  let heading2 = useRef(null)
  let heading3 = useRef(null)

  useEffect(() => {
    textIntro([heading, heading2, heading3])
  }, [])
  return (
    <section id="hero" className="hero__wrapper">
      <div className="hero__container">
        <div className="circle__text">
          <img src={Image} alt="available" />
        </div>
        <h5
          ref={(el) => { heading = el }}>
          Hi, I am Abdul Malik 😃
          <svg width="40px" height="1" color="#8f00ff">
            <path fillRule="evenodd" d="M0 0h66v4H0z" />
          </svg>
          🚀Available For Freelance Work
        </h5>
        <h1
          ref={(el) => {
            heading2 = el
          }}
        >
          Taking your vision and serving as a reality
        </h1>
        <p
          ref={(el) => {
            heading3 = el
          }}
        >
          Crafting
          Website Based on Simplicity and Performance that are
          <span>
            {' '}
            conversions-focused, brand-accurate, user-friendly, performance and
            minimalistic based.
          </span>
          {" "}Helping your buisness stand out.
        </p>
        <Button
          site={"/contact"}
          className='primary__btn' text='contact with me'
        />
      </div>
    </section>
  )
}

export default Hero
