import React,{useState} from 'react'
import Logo from '../../logo/Logo'
import {RxHamburgerMenu} from 'react-icons/rx'
import {BsArrowLeft} from 'react-icons/bs'
import{BsFillJournalBookmarkFill} from 'react-icons/bs'
import{BiCoffeeTogo} from 'react-icons/bi'
import {MdContactSupport} from 'react-icons/md'
import {CiSettings} from 'react-icons/ci'
import '../nav/Navbar.css'
import { Link } from 'react-router-dom'

const NavResponsive = () => {
  const[popOn, setPopOn]=useState(false)

  

  return (
    <div className='NavContainer-responsive'>
        <Logo/>
        <button className='burguer-button' onClick={()=>setPopOn(!popOn)}>
        <RxHamburgerMenu className='burguer'/>
        </button>

        <div className={popOn === true? 'popup-burguer-menu' : 'pop-off'}>
            <button className='close' onClick={()=>setPopOn(false)}><BsArrowLeft className='close'/></button>

        <div className='menu-items-responsive'>

        <a className='item-container' onClick={()=>setPopOn(false)}>
          <div id='circle'><BsFillJournalBookmarkFill/></div>
          <p>About</p>
        </a>

          <Link to={'/career'} className='item-container' onClick={()=>setPopOn(false)}>
          <div id='circle'><BiCoffeeTogo/></div>
          <p>Career</p>
        </Link>


        <Link to={'/projects'} className='item-container' onClick={()=>setPopOn(false)}>
          <div id='circle'><CiSettings/></div>
          <p>Projects</p>
        </Link>


        <a href='#Footer'className='item-container' onClick={()=>setPopOn(false)}>
          <div id='circle'><MdContactSupport/></div>
          <p>Contact</p>
        </a>


      
        </div>

        <div className='final-menu'>
          <a href='#Footer' onClick={()=>setPopOn(false)}>Contact me</a>
          <Link to={'/signin'} onClick={()=>setPopOn(false)}>Sign in</Link>
        </div>
        </div>
    </div>
  )
}

export default NavResponsive