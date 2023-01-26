import './App.css'
import Navbar from './components/navbar/nav/Navbar'
import Landing from './pages/landing/Landing'
import {Routes, Route} from 'react-router-dom'
import NavResponsive from './components/navbar/navresponsive/NavResponsive'
import Projects from './pages/projects/Projects'
import Signin from './pages/signin/Signin'

function App() {


  return (
   <div className='container'>
    <div>
    <Navbar/>
    <NavResponsive/>
    </div>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/signin' element={<Signin/>}/>
    </Routes>
   </div>
  )
}

export default App
