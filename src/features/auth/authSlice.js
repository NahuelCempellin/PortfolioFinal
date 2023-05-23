import { createSlice } from "@reduxjs/toolkit";
import {createUserWithEmailAndPassword , signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'


export const authSlice = createSlice({
  name: "auth",
  initialState: [],
  reducers: {
    authentication : (state, action) =>{
      register(action.payload)
    },
    logIn: (state, action)=>{
      login(action.payload)
    },
    loged : (state,action) =>{
      state.push(action.payload)
    }
    

  },
});

export async function register ({email,password}){
  const response= await createUserWithEmailAndPassword(auth ,email,password)

   console.log(response)
}

export async function login ({email,password}){
 const response = await signInWithEmailAndPassword(auth ,email,password)
 dispatch(loged(response))
 console.log(response)
}



export const loginWithGoogle = async()=>{
  const responseGoogle = new GoogleAuthProvider()
  return await signInWithPopup(auth, responseGoogle)
}

export const logout = async()=>{
  const response = await signOut(auth)
  console.log(response)
}




export const { authentication, logIn} = authSlice.actions;
export default authSlice.reducer;