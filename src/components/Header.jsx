import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CgMenuRight } from 'react-icons/cg'
import { MdClose } from "react-icons/md"
import Logo from '../assets/logo.png'
import Hamburger from './Hamburger'
import { stateContext } from "../lib/stateContext"

const Header = () => {

  const { menu, setMenu } = useContext(stateContext)

  const close = () => {
    setMenu(!menu)
  }

  const handleClick = () => {
    menu ? setMenu(prev => !prev) : setMenu(prev => !prev)
  }
  !menu ? document.body.style.overflow = "hidden" : document.body.style.overflow = "scroll"

  const [sticky, setSticky] = useState(false)
  const stickyNav = () => {
    window.scrollY >= 70 ? setSticky(true) : setSticky(false)
  }
  window.addEventListener('scroll', stickyNav)

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className={sticky ? 'inner__header sticky' : 'inner__header'}>
            <NavLink to="/">
              <div className="logo">
                <img src={Logo} alt="" loadin="lazy" />
                <h4>Abdul Malik</h4>
              </div>
            </NavLink>
            <div
              className="menu"
              onClick={handleClick}
            >
              <p>{menu ? "menu" : "close"}</p>
              <div>{menu ? <CgMenuRight style={{ fontSize: "2.3rem" }} /> : <MdClose style={{ fontSize: "2.3rem" }} />}</div>
            </div>
          </div>
        </div>
      </div>
      <Hamburger menu={menu} close={close} />
    </header>
  )
}
export default Header
