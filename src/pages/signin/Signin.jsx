import React,{useEffect, useState} from 'react'
import './Signin.css'
import { BsArrowRight } from 'react-icons/bs'
import {  useDispatch, useSelector } from 'react-redux'
import {  logIn, loginWithGoogle, loged, logout } from '../../features/auth/authSlice'
import { onAuthStateChanged } from 'firebase/auth'
import Logo from '../../components/logo/Logo'
import { Link } from 'react-router-dom'
import { auth } from '../../server/firebase'

const Signin = () => {
  const dispatch = useDispatch()
  const authentication = useSelector((state)=> state.auth)
  const[user, setUser]= useState({
    email:'',
    password:'',
    
  })
  
  
  
  useEffect(()=>{
    const subscribed= onAuthStateChanged(auth, (currentUser)=>{
      if(!currentUser){
        console.log("No hay usuario suscrito")
      }else{
        
      
        
        dispatch(loged(currentUser.accessToken))
        console.log(authentication)
        
      }

        return()=>subscribed()
    })
 },[auth]) 

const handleEmail =(e)=>{
  setUser({...user, email: e.target.value})
}
const handlePasword =(e)=>{
  setUser({...user, password: e.target.value})
}

const handleLogin = ()=>{
  
  dispatch(logIn(user))
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
                <a className='second' href='#Footer' onClick={()=>handleLogin()}>Sign in<BsArrowRight className='arrow-two'/></a>

                <Link to='/register' className='second' href='#Footer' >Register<BsArrowRight className='arrow-two'/></Link>
            </div>
        </div>
    </div>
  )
}

export default Signin