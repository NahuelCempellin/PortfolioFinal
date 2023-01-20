import React from 'react'
import Logo from '../../logo/Logo'
import {RxHamburgerMenu} from 'react-icons/rx'
import '../nav/Navbar.css'

const NavResponsive = () => {
  return (
    <div className='NavContainer-responsive'>
        <Logo/>
        <RxHamburgerMenu className='burguer'/>
    </div>
  )
}

export default NavResponsive