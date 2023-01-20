import './App.css'
import Navbar from './components/navbar/nav/Navbar'
import Landing from './pages/landing/Landing'
import {Routes, Route} from 'react-router-dom'
import NavResponsive from './components/navbar/navresponsive/NavResponsive'

function App() {


  return (
   <div className='container'>
    <div>
    <Navbar/>
    <NavResponsive/>
    </div>
    <Routes>
      <Route path='/' element={<Landing/>}/>
    </Routes>
   </div>
  )
}

export default App
