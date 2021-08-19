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
          <span
            ref={(el) => (first = el)}>Frontend-Developer</span>
          <span
            ref={(el) => (second = el)}>
            UI/UX Designer</span>
          <span
            ref={(el) => (third = el)}>
            Responsive Designer</span>
        </div>
      </div>
    </section>
  )
}
