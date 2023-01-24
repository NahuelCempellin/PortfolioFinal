import React,{useState} from 'react'
import Logo from '../../logo/Logo'
import {RxHamburgerMenu} from 'react-icons/rx'
import {BsArrowLeft} from 'react-icons/bs'
import{BsFillJournalBookmarkFill} from 'react-icons/bs'
import{BiCoffeeTogo} from 'react-icons/bi'
import {MdContactSupport} from 'react-icons/md'
import {CiSettings} from 'react-icons/ci'
import { NavLink } from 'react-router-dom'
import '../nav/Navbar.css'

const NavResponsive = () => {
  const[popOn, setPopOn]=useState(false)

  

  return (
    <div className='NavContainer-responsive'>
        <Logo/>
        <button  onClick={()=>setPopOn(!popOn)}>
        <RxHamburgerMenu className='burguer'/>
        </button>

        <div className={popOn === true? 'popup-burguer-menu' : 'pop-off'}>
            <button className='close' onClick={()=>setPopOn(false)}><BsArrowLeft/></button>

        <div className='menu-items-responsive'>

        <a className='item-container' onClick={()=>setPopOn(false)}>
          <div id='circle'><BsFillJournalBookmarkFill/></div>
          <p>About</p>
        </a>


        <a href='#project' className='item-container' onClick={()=>setPopOn(false)}>
          <div id='circle'><CiSettings/></div>
          <p>Projects</p>
        </a>


        <a href='#Footer'className='item-container' onClick={()=>setPopOn(false)}>
          <div id='circle'><MdContactSupport/></div>
          <p>Contact</p>
        </a>


        <a className='item-container' onClick={()=>setPopOn(false)}>
          <div id='circle'><BiCoffeeTogo/></div>
          <p>Cofee</p>
        </a>


        <div className='final-menu'>
          <a>Contact me</a>
          <a>Sign in</a>
        </div>

        </div>

        </div>
    </div>
  )
}

export default NavResponsive