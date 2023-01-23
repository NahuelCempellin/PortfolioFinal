import React from 'react'
import './Footer.css'
import {AiFillFacebook, AiOutlineInstagram, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import{BsArrowRight} from 'react-icons/bs'


const Footer = () => {
  return (
    <div className='footer-c-container'>
      <div>
        <p>Contact</p>

        <div>
          <a>NahuelCempellin@gmail.com</a>

          <div className='redes'>
            <a target={'_blank'} href='https://www.facebook.com/nahuel.cempellin/'>
            <AiFillFacebook/>
            </a>
            <a target={'_blank'} href='https://www.instagram.com/nahuelcempellin' >
            <AiOutlineInstagram/>
            </a>
            <a target={'_blank'} href='https://www.linkedin.com/in/nahuel-felipe-cempellin/'>
            <AiFillLinkedin />
            </a>
            <a target={'_blank'} href='https://github.com/NahuelCempellin'>
            <AiFillGithub/>
            </a>
          </div>
        </div>
      </div>

      <div className='message-box'>
        <p>Send a message</p>
        <input className='' placeholder='Mail...'/>
        <input className='' placeholder='Name...'/>
        <textarea placeholder='Message...'/>
        <button>Send <BsArrowRight className='arrow-one'/></button>
      </div>
    </div>
  )
}

export default Footer