import React from 'react'
import Carrousel from '../../components/carousel/Carrousel'
import {BsArrowRight} from 'react-icons/bs'
import '../../App.css'
import Tech from '../../components/tecnologies/Tech'
import Footer from '../../components/footer/Footer'
import Projects from '../../components/projects/Projects'

const Landing = () => {
  return (
    <div>
    <div className='titleContainer'>
     <div className='title'>Hi, I'm Nahuel Cempellin!</div> 
    <Carrousel/>
    <p className='text'>Full Stack developer, and React.js Tutor in Coderhouse. Graduate of the bootcamp Soy Henry, with one year of experience as a frontend developer.</p>
    </div>

    <div className='button-container'>
      <button className='more'>See more <BsArrowRight className='arrow-one'/></button>
      <a className='second' href='#Footer'>Contact me <BsArrowRight className='arrow-two'/></a>
    </div>

    <div className='tech'>
        <Tech/>
    </div>

    <div className='projects' id='project'>
      <Projects/>
    </div>

    <div className='footer-container' id='Footer'>
      <Footer/>
    </div>
    </div>
  )
}

export default Landing