import React, { useRef, useEffect } from 'react'
import Button from '../helpers/Button'
import { describe } from '../helpers/Animation'

const Describe = () => {
  let line1 = useRef(null)
  let line3 = useRef(null)
  useEffect(() => {
    describe([line1, line3])
    // describeRight([line3])
  }, [])
  return (
    <div className="describe">
      <div ref={(el) => {
        line1 = el
      }}
        className="describe__left">
        <h2>
          Your website should turn<span> visitors
          </span> into <span>
            engaged</span> customers
        </h2>
        <h4>
          These two extra things make all the difference between a visit and a
          sale in your buiness.
        </h4>
      </div>
      <div ref={(el) => (line3 = el)} className="describe__right">
        <p>
          When I say high-performing website, I don’t just mean a beautiful
          looking website; although that is most definitely a part of it.
        </p>
        <div className="line__img">
          <img
            src="https://uploads-ssl.webflow.com/603a00d2496482478db36f56/6059efa1fc68d6291fd64684_laptop-lighter.svg"
            alt=""
          />
          <ul>
            <h5>
              What I mean by a high-performing website is:
            </h5>
            <li>LOOKING GOOD</li>
            <li>PLUS Getting discovered by your clients</li>
            <li>PLUS closing them</li>
          </ul>
        </div>
        <p>
          Your high-performing website will achieve this through the use of
          intentional design and on-the-pulse marketing tactics.
        </p>
        <p>
          <strong>
            A good, intentional design will position you as the expert and
            authority that you know you are, conveying trust among your
            visitors.
          </strong>
        </p>
        <p>
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
