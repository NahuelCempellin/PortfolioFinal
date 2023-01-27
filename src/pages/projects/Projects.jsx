import React from 'react'
import './project-page.css'
import Footer from '../../components/footer/Footer'
import {BiCodeAlt} from 'react-icons/bi'

import ProjectPresentation from '../../components/project-view/ProjectPresentation'
import ImageComponent from './ImageComponent'



const Projects = () => {

    


  return (
    <div className='projects-page-container'>
        <div className='project-title-box'>
            <BiCodeAlt className='code-icon-projects'/>
            <div>
            <h2>Nahuel.js</h2>
            <h1>Projects</h1>
            <p>
               Welcome! There are a recopilation of my work experience.
            </p>
            </div>
        <ImageComponent/>
        </div>


        <div className='presentation'>
            <ProjectPresentation/>
        </div>

        <div className='footer-container-projects' id='Footer'>
      <Footer/>
    </div>
    </div>
  )
}

export default Projects