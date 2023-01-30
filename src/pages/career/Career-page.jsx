import React from 'react'
import './career.css'
import {VscJson} from 'react-icons/vsc'
import CareerIcons from '../../components/careerfloat/CareerIcons'

const Career = () => {
  return (
    <div className='career-container'>
        <div className='title-container-career'>

          <div className='title-box'>

            <div className='logo-container'>
          <div>
            <VscJson className='logo-vsc'/>
          </div>
          <div>
          <p className='icon-njs'>Nahuel.js</p>
          <h2>Career</h2>
          <p className='text-career'>Here you can see my career and my travel that's start 1 year ago...</p>
          </div>
            </div>

          </div>

         <div className='shape-container'>
          <CareerIcons/>
         </div>
        </div>
    </div>
  )
}

export default Career