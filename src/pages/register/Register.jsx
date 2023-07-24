import React,{useState} from 'react'
import '../signin/Signin.css'
import { BsArrowRight } from 'react-icons/bs'
import {  useDispatch } from 'react-redux'
import {  register } from '../../features/auth/authSlice'
import Logo from '../../components/logo/Logo'

const Register = () => {
  const dispatch = useDispatch()
  
  const[user, setUser]= useState({
    email:'',
    password:''
  })

const handleEmail =(e)=>{
  setUser({...user, email: e.target.value})
}
const handlePasword =(e)=>{
  setUser({...user, password: e.target.value})
}

const handleRegister = ()=>{
  register(user)
}



  return (
    <div className='signin-cont'>
        <div className='box-sn-container'>

            <div className='inner-box'>
                <Logo/>
                <p>Welcome!</p>
                <input placeholder='Email...' value={user.email} onChange={(e)=>handleEmail(e)}/>
                <input placeholder='Password...'value={user.password}  onChange={(e)=>handlePasword(e)}/>
            </div>
            <div className='button-container-sn'>
                <a className='second' href='#Footer' onClick={()=>handleRegister()}>Register<BsArrowRight className='arrow-two'/></a>
            </div>
        </div>
    </div>
  )
}

export default Register