import React, { useRef, useEffect } from 'react'
import { screenAnimation } from "../helpers/Animation"
export default function Loader() {
  let loader = useRef(null)
  useEffect(() => {
    screenAnimation(loader)

  }, [])
  return (
    <section className="loader"
      ref={(el) => (loader = el)}>
      <div className="overlay">
        <h1 className="title">Abdul Malik</h1>
      </div>
    </section>
  )
}
