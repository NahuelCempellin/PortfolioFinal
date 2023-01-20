import React from 'react'
import{BsFillTriangleFill,BsFillJournalBookmarkFill} from 'react-icons/bs'
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
            <div className='box-about-cont'>
            <NavLink>About</NavLink>
            <BsFillTriangleFill className='triangle'/>
            <div className='box-about'>
              <p>About me</p>
              <div className='menu-about-container'>
               <a>
                 <BsFillJournalBookmarkFill/>
                 Studies
              </a>
              </div>
              
            </div>
            </div>
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