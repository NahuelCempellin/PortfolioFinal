import React from 'react'
import './Signin.css'
import { BsArrowRight } from 'react-icons/bs'

const Signin = () => {
  return (
    <div className='signin-cont'>
        <div className='box-sn-container'>

            <div className='inner-box'>
            <p>Only for admin 😅!</p>
                <input placeholder='User...'/>
                <input placeholder='Password...'/>
            </div>
            <div className='button-container-sn'>
                <a className='second' href='#Footer'>Sign in<BsArrowRight className='arrow-two'/></a>
            </div>
        </div>
    </div>
  )
}

export default Signin