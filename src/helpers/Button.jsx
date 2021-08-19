import React from "react"
import { Link } from "react-router-dom"
const Button = ({ text, className, site }) => {
  return (
    <button
      type="button" className={className}>
      <Link to={site}>{text}
      </Link>
    </button>
  )
}

export default Button
