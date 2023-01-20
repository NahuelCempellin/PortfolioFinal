import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../logo/Logo'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='NavContainer'>
        <div>
            <Logo/>
        </div>

        <div className='menu-box'>
            <NavLink>About</NavLink>
            <NavLink>Projects</NavLink>
            <a href='#Footer' className='contacto'>Contact</a>
            <NavLink>Cofee</NavLink>
        </div>

        <div className='signin'>
            <NavLink>Sign In</NavLink>
        </div>
    </div>
  )
}

export default Navbar