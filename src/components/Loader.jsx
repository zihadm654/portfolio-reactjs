import React, { useRef, useEffect } from 'react'
import { screenAnimation, loaderAni, blink } from "../helpers/Animation"
export default function Loader() {
  let loader = useRef(null)
  let first = useRef(null)
  let second = useRef(null)
  let third = useRef(null)
  useEffect(() => {
    screenAnimation(loader)
    loaderAni([first, second, third])
    blink([first, second, third])

  }, [])
  return (
    <section className="loader"
      ref={(el) => (loader = el)}>
      <div className="overlay">
        <h1 className="title">Abdul Malik</h1>
        <div className="wordmill">
          <div
            ref={(el) => (first = el)}>Frontend-Developer</div>
          <div
            ref={(el) => (second = el)}>
            UI/UX Designer</div>
          <div
            ref={(el) => (third = el)}>
            React Developer</div>
        </div>
      </div>
    </section>
  )
}
