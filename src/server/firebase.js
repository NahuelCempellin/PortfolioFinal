// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr7kAmjwDKotiuBUV3i0B0IHNmxCAig90",
  authDomain: "portfolio-fc5a6.firebaseapp.com",
  projectId: "portfolio-fc5a6",
  storageBucket: "portfolio-fc5a6.appspot.com",
  messagingSenderId: "403794296324",
  appId: "1:403794296324:web:75428648fa2ebb2533bf51",
  measurementId: "G-FDYS7PGT3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)