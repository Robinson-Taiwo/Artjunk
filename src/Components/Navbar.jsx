/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import logo from "../assets/Icons/ARTJUNKS.svg"
import menu from "../assets/Icons/menu.svg"
import close from "../assets/Icons/cancle.svg"
import "./Navbar.css"


const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false)
  const [bodyOverflow, setBodyOverflow] = useState('auto'); // 'auto' allows scrolling


  const toggleMenu = () => {
    setOpenMenu(!openMenu)
    setBodyOverflow(openMenu ? 'auto' : 'hidden');

  }


  useEffect(() => {
    document.body.style.overflow = bodyOverflow;

    // Cleanup the effect when the component unmounts
    return () => {
      document.body.style.overflow = 'auto'; // Reset to default
    };
  }, [bodyOverflow]);


  return (
    <div className='Navbar-container' >

      <img src={logo} alt="" className="navbar-logo" />

      <aside className={openMenu ? "navbar-mobile-menu" : "navbar-menu"}>

        <div className='close-menu-div'>
          <img onClick={toggleMenu} className='close-icon' src={close} alt="" />

        </div>


        <p className="navbar-item">Home</p>
        <p className="navbar-item">About</p>
        <p className="navbar-item">Artists</p>
        <p className="navbar-item">Careers</p>
        <p className="navbar-item">News</p>
        <p className="navbar-item">Company</p>
        <button className="navbar-button">Get started</button>


      </aside>

      <img src={menu} alt="" className="menu-icon" onClick={toggleMenu} />

    </div>
  )
}

export default Navbar