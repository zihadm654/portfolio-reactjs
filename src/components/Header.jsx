import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from "react-icons/md"
import Logo from '../assets/logo.png'
import Hamburger from './Hamburger'

const Header = () => {
  const close = () => {
    setMenu(!menu)
  }
  const [menu, setMenu] = useState(true)
  const handleClick = () => {
    menu ? setMenu(prev => !prev) : setMenu(prev => !prev)
  }
  const [sticky, setSticky] = useState(false)
  const stickyNav = () => {
    if (window.scrollY >= 70) {
      setSticky(true)
    } else {
      setSticky(false)
    }
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
              <div>{menu ? <GiHamburgerMenu style={{ fontSize: "2rem" }} /> : <MdClose style={{ fontSize: "2rem" }} />}</div>
            </div>
          </div>
        </div>
      </div>
      <Hamburger menu={menu} close={close} />
    </header>
  )
}
export default Header
