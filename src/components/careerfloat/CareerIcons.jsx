import React from 'react'
import {SiRedux, SiExpress, SiNextdotjs, SiTailwindcss, SiTypescript,SiReact} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io'
import {GrNode} from 'react-icons/gr'
import './career-icons.css'


const CareerIcons = () => {
  return (
    <div>
    <ul id="shape">
            <li><SiReact/></li>
            <li><SiRedux/></li>
            <li><SiTailwindcss/></li>
            <li><SiExpress/></li>
            <li><SiTypescript/></li>
            <li><IoLogoJavascript/></li>
            <li><SiNextdotjs/></li>
            <li><GrNode/></li>
        </ul>
    </div>
  )
}

export default CareerIcons