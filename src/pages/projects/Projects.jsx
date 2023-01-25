import React from 'react'
import './project-page.css'
import {BiCodeAlt} from 'react-icons/bi'


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
        </div>
    </div>
  )
}

export default Projects