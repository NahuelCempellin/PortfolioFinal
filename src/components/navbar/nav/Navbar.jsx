import React from 'react'
import{BsFillTriangleFill,BsFillJournalBookmarkFill} from 'react-icons/bs'
import{AiOutlineLink} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import {CiSettings} from 'react-icons/ci'
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
              <p>About...</p>
              <div className='menu-about-container'>
              
              <a>
                <div className='circle-about-item'>
                 <CgProfile className='item-color'/>
                </div>
                 Me
              </a>

               <a>
                <div className='circle-about-item'>
                 <BsFillJournalBookmarkFill className='item-color'/>
                </div>
                 Studies
              </a>

              <a>
                <div className='circle-about-item'>
                 <CiSettings className='item-color'/>
                </div>
                 Work experience
              </a>

              <a>
                <div className='circle-about-item'>
                 <AiOutlineLink className='item-color'/>
                </div>
                 Links
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