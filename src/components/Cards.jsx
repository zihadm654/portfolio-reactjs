import React, { useRef, useEffect } from 'react'
import { fadeIn } from "../helpers/Animation"
import { Link } from 'react-router-dom'
import { HiOutlineArrowRight } from 'react-icons/hi'

const Cards = ({ img, id, description, title }) => {
  const revealRefs = useRef([])
  revealRefs.current = [];
  useEffect(() => {
    fadeIn(revealRefs.current)
  }, [])
  const addRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }
  return (
    <main
      ref={addRefs}
      className="card__wrapper">
      <Link to={"/projects/" + id} className="link">
        <div className="image__container">
          <img src={img} alt={img} />
        </div>
      </Link>
      <div className="card__text">
        <h5>{title}</h5>
        <p>{description}</p>
        <Link to={"/projects/" + id} className="link">
          See case study
          <HiOutlineArrowRight className="icon" />
        </Link>
      </div>
    </main>
  )
}
export default Cards

export const LayoutCards = ({ id, img, title, description }) => {
  const revealRefs = useRef([])
  revealRefs.current = [];

  const addRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }
  useEffect(() => {
    fadeIn(revealRefs.current)
  }, [])
  return (
    <main
      ref={addRefs}
      className="card__wrapper">
      <Link to={"/projects/" + id} className="link">
        <div className="image__container">
          <img src={img} alt={img} />
        </div>
      </Link>
      <div className="card__text">
        <h5>{title}</h5>
        <p>{description}</p>
        <Link to={"/projects/" + id} className="link">
          See case study
          <HiOutlineArrowRight className="icon" />
        </Link>
      </div>
    </main>
  )
}