import React, { useRef, useEffect } from 'react'
import Icon from '../helpers/Icon'
import { describe } from "../helpers/Animation"

const Progress = () => {
  useEffect(() => {
    describe([Title, subtitle, content])
  }, [])
  let Title = useRef(null)
  let subtitle = useRef(null)
  let content = useRef(null)

  return (
    <section className="progress">
      <div className="progress__description">
        <h5 ref={(el) => (Title = el)}
        >How i go with projects?</h5>
        <h3 ref={(el) => (subtitle = el)}
        >Going beyond what’s possible</h3>
        <div ref={(el) => (content = el)}
          className="list">
          <h4>
            Concept
          </h4>
          <span><svg
            className="line"
            width="40px" height="1" color="#8f00ff">
            <path fillRule="evenodd" d="M0 0h66v4H0z" />
          </svg></span>
          <h4>
            Strategy
          </h4>
          <span><svg
            className="line"
            width="40px" height="1" color="#8f00ff">
            <path fillRule="evenodd" d="M0 0h66v4H0z" />
          </svg></span>
          <h4>Design
          </h4>
          <span><svg
            className="line"
            width="40px" height="1" color="#8f00ff">
            <path fillRule="evenodd" d="M0 0h66v4H0z" />
          </svg></span>
          <h4>Develpement
          </h4>
        </div>
        <p>Whatever the challenge, we'll deliver solution you will love it.</p>
      </div>
      <Icon linkName={"/story"} text={'read more'} />
    </section>
  )
}

export default Progress
