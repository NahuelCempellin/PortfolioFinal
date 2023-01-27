import React from 'react'
import {DiReact} from 'react-icons/di'
import {SiRedux, SiExpress,SiMongodb, SiMaterialui, SiNextdotjs, SiTailwindcss, SiTypescript} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io'
import {AiFillGithub} from 'react-icons/ai'
import {DiGit} from 'react-icons/di'
import {GrNode} from 'react-icons/gr'
import './Tech.css'
import { useEffect } from 'react'



const Tech = () => {

  useEffect(()=>{

    
  },[])
   
    
  return (
    <div className='tech-container'>
      <div className='tech-front'>
        <IoLogoJavascript/>
        <DiReact/>
        <SiRedux/>
        <SiNextdotjs/>
        <SiMaterialui/>
        <SiTailwindcss/>
      </div>
      <div className='hrcont'>
        <hr id='Hr'/>
        <hr id='Hr2'/>
      </div>
      <div className='tech-back'>
        <SiTypescript/>
        <SiExpress/>
        <SiMongodb/>
        <AiFillGithub/>
        <DiGit/>
        <GrNode/>
      </div>

    </div>
  )
}

export default Tech