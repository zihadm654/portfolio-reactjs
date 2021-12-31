import React, { useRef, useEffect } from 'react'
import Button from '../helpers/Button'
import { fadeIn } from '../helpers/Animation'

const Describe = () => {
  let line1 = useRef(null)
  let line2 = useRef(null)
  let line3 = useRef(null)
  let line4 = useRef(null)
  let line5 = useRef(null)
  let line6 = useRef(null)
  useEffect(() => {
    fadeIn([line1, line2, line3, line4, line5, line6])
  }, [])
  return (
    <div className="describe">
      <div
        className="describe__left">
        <h2 ref={(el) => {
          line1 = el
        }}>
          Your website should turn<span> visitors
          </span> into <span>
            engaged</span> customers
        </h2>
        <h4 ref={el => line2 = el}>
          These two extra things make all the difference between a visit and a
          sale in your buiness.
        </h4>
      </div>
      <div className="describe__right">
        <p ref={(el) => (line3 = el)}>
          When I say high-performing website, I don’t just mean a beautiful
          looking website; although that is most definitely a part of it.
        </p>
        <ul ref={(el) => (line4 = el)}>
          <h5>
            What I mean by a high-performing website is:
          </h5>
          <li>LOOKING GOOD</li>
          <li>PLUS Getting discovered by your clients</li>
          <li>PLUS closing them</li>
        </ul>
        <p ref={(el) => (line5 = el)}>
          <strong>
            A good, intentional design will position you as the expert and
            authority that you know you are, conveying trust among your
            visitors.
          </strong>
        </p>
        <p ref={(el) => (line6 = el)}>
          If you want to discover how you stand out from the rest and be
          represented by a high-performing, 24/7 lead-generating website, then
          connect with me by booking your free, 30-minute call below.
        </p>
        <Button site={"/contact"}
          className="primary__btn" text='Book a free consultant' />
      </div>
    </div>
  )
}

export default Describe
