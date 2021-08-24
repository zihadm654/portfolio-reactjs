import React, { useState } from 'react'
import { SlideData } from '../data/SlideData'
// import { HorizontalScroll } from '../helpers/Animation'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

const Slider = () => {
  const [activeItem, setActiveItem] = useState(0)

  const nextHandler = () => {
    setActiveItem(activeItem === SlideData.length - 1 ? 0 : activeItem + 1)
  }
  const prevHandler = () => {
    setActiveItem(activeItem === 0 ? SlideData.length - 1 : activeItem - 1)
  }
  const moveDot = (i) => {
    setActiveItem(i)
  }
  return (
    <section className="slider">
      <div className="clientInfo">
        <h4>
          {SlideData[activeItem].name}
        </h4>
        <p>
          {SlideData[activeItem].title}
        </p>
      </div>
      <div className="slideContent">
        <div className="quotation">
          <ImQuotesLeft className="left-quote" />
          <p>
            {SlideData[activeItem].quote}
          </p>
          <ImQuotesRight className="right-quote" />
        </div>
      </div>
      <div className="wrapper__btn">
        <button
          className="btn prev"
          onClick={prevHandler}
        >
          <BsArrowLeft />
        </button>
        <button
          className="btn next"
          onClick={nextHandler}>
          <BsArrowRight />
        </button>
        <div className="dots">
          {Array.from({ length: 4 }).map((item, i) => (
            <div
              key={i}
              onClick={() => moveDot(i)}
              className={activeItem === i ? 'dot active' : 'dot'}
            ></div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Slider
