import React, { useRef, useEffect } from 'react'
import { screenAnimation, staggerText } from "../helpers/Animation"
export default function Loader() {
  let loader = useRef(null)
  let line1 = useRef(null)
  let title = useRef(null)
  useEffect(() => {
    screenAnimation(loader)
    staggerText([title, line1])
  }, [])
  return (
    <section className="loader"
      ref={(el) => (loader = el)}>
      <h1 className="title"
        ref={el => title = el}>Abdul Malik</h1>
      <div className="windmill">
        <h5 ref={el => line1 = el}>Frontend-Developer & UI/UX Designer</h5>
      </div>
    </section>
  )
}
