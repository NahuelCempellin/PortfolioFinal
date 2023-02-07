import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import './Footer.css'
import {AiFillFacebook, AiOutlineInstagram, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import{BsArrowRight} from 'react-icons/bs'


const Footer = () => {
  const[mess,setMess]=useState({
    name:'',
    email:'',
    subject:'',
    message:''
  })


 

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_0f37gtj", 
      'template_0rq9esd', 
      form.current, 
      '8drHBIS7iehYuIbQe')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
      if(mess.name === ''){
        import ('https://cdn.skypack.dev/wc-toast') .then(({toast})=>toast('Name missing ❌',{duration:2000}))
      }else if(mess.email === ''){
        import ('https://cdn.skypack.dev/wc-toast') .then(({toast})=>toast('Email missing ❌',{duration:2000}))
      }else if(mess.subject === ''){
        import ('https://cdn.skypack.dev/wc-toast') .then(({toast})=>toast('Subject missing ❌',{duration:2000}))
      }else if(mess.message === ''){
        import ('https://cdn.skypack.dev/wc-toast') .then(({toast})=>toast('Message missing ❌',{duration:2000}))
      } else if(mess.name && mess.email && mess.subject && mess.message !== ''){
        import ('https://cdn.skypack.dev/wc-toast') .then(({toast})=>toast('Message sent ✅',{duration:2000}))
        setMess({
          name:'',
          message:'',
          subject:'',
          email:''
  
        })
      }
  };


//   const setMessage=(e)=>{
//     e.preventDefault()
    
// }



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

      <form className='message-box' onSubmit={sendEmail} ref={form}>
        <p>Send a message</p>
          <input value={mess.name} type="text" name="user_name" placeholder='Name'  onChange={(e)=>setMess({...mess, name: e.target.value})}/>
          <input value={mess.email} type="email" name="user_email" placeholder='Email' onChange={(e)=>setMess({...mess, email: e.target.value})} />
          <input value={mess.subject} type="text" name="asunto" placeholder='Subject' className="asunto"  onChange={(e)=>setMess({...mess, subject: e.target.value})}/>
        <textarea value={mess.message}  name="message" placeholder='Message' onChange={(e)=>setMess({...mess, message: e.target.value})}/> 
        <button type="submit" value="Send">Send <BsArrowRight className='arrow-one'/></button>
      </form>
    </div>
  )
}

export default Footer