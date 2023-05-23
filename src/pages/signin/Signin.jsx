import React,{useState} from 'react'
import './Signin.css'
import { BsArrowRight } from 'react-icons/bs'
import {  useDispatch } from 'react-redux'
import { register, logIn, loginWithGoogle } from '../../features/auth/authSlice'
import Logo from '../../components/logo/Logo'

const Signin = () => {
  const dispatch = useDispatch()
  

  return (
    <div className='signin-cont'>
        <div className='box-sn-container'>

            <div className='inner-box'>
                <Logo/>
                <p>Welcome!</p>
                <input placeholder='User...'/>
                <input placeholder='Password...'/>
            </div>
            <div className='button-container-sn'>
                <a className='second' href='#Footer'>Sign in<BsArrowRight className='arrow-two'/></a>

                <a className='second' href='#Footer'>Register<BsArrowRight className='arrow-two'/></a>
            </div>
        </div>
    </div>
  )
}

export default Signin