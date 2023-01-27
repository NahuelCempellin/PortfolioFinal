import React from 'react'
import './Projects.css'
import {BiCodeAlt} from 'react-icons/bi'
import {BsArrowRight} from 'react-icons/bs'
import ProjectsCarrousel from './ProjectsCarrousel'
import { Link } from 'react-router-dom'


const Projects = () => {
  return (
    <div className='projects-container' >
        <div className='title-container'>
            <div className='title-project-box'>
            <BiCodeAlt className='code-icon'/>
            <a>Profesional & personal projects.</a>
            </div>
            

            <h2>"Love what you do, do what you love."</h2>

            <p>In this section you can see my personal projects, which I have carried out both as a study, and professional projects, in which I have collaborated in their development.</p>

            <Link to={'/projects'} className='second' id='button-renegade'>See more<BsArrowRight className='arrow-two'/></Link>

        </div>

        <div className='project-box'>
            <ProjectsCarrousel/>
        </div>
    </div>
  )
}

export default Projects