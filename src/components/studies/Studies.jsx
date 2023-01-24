import React from 'react'
import './Studies.css'
import Diploma from '../../assets/fullstack.jpeg'
import {BsArrowRight,BsJournalBookmarkFill} from 'react-icons/bs'

const Studies = () => {
  return (
        <div className='stuides-container' >

        <div className='studies-box'>
           <div className='img-container'>
            <img src={Diploma} alt='diploma Henry'/>
           </div>
        </div>


        <div className='title-container-studies'>

            
            <div className='title-studies-box'>
            <BsJournalBookmarkFill className='code-icon-studies'/>
            <a>Studies & career.</a>
            </div>
            {/* <a>Projects</a> */}

            <h2>"Some steps, change your life."</h2>

            <p>In a pandemic, like many people, I have had to change my profession. After thinking about it a lot, I decided to go back to studying programming, which was the first step to change my life.</p>

            <button className='second' id='button-renegade-studies'>See more<BsArrowRight className='arrow-two'/></button>

        </div>

      
    </div>
  )
}

export default Studies