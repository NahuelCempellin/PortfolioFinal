import { auth } from "../server/firebase";
import { createContext, useContext } from "react";



export const auth = createContext()

export const useAuth= () =>{
    const context = useContext(auth)

    if(!context){
        console.log("error creating auth context")
    }return context;

}


// export function AuthProvider({children}){
//     return <authContext.Pro
// }