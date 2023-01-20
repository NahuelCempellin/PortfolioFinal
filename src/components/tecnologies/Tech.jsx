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

    const bg = document.querySelector('.tech-front');
    const windowWidth = window.innerWidth / 5;
    const windowHeight = window.innerHeight / 5 ;
    
    bg.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX / windowWidth;
      const mouseY = e.clientY / windowHeight;
      
      bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
    });

    const bgB = document.querySelector('.tech-back');
    const windowWidthB = window.innerWidth / 5;
    const windowHeightB = window.innerHeight / 5 ;
    
    bgB.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX / windowWidthB;
      const mouseY = e.clientY / windowHeightB;
      
      bgB.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
    });
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