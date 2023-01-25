import React from 'react'
import '../navbar/nav/Navbar.css'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className='Logo'>
      <Link to={'/'}>
        <p>Nahuel.js</p>
      </Link>
    </div>
  )
}

export default Logo