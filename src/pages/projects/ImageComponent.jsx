import React, {useEffect} from 'react'
import './project-page.css'
import credit from '../../assets/creditcard.jpeg'
import dashboard from '../../assets/dashboard.jpeg'
import dashl from '../../assets/dashl.jpeg'
import galuhome from '../../assets/galuhome.jpeg'
import galulight from '../../assets/galulight.jpeg'
import galuLog from '../../assets/galulog.jpeg'
import glaures from '../../assets/galures.jpeg'
import kmkLand from '../../assets/kmkland.jpeg'
import kmkres from '../../assets/kmkres.jpeg'
import portfolio from '../../assets/portfolio.jpeg'


const ImageComponent = () => {

    useEffect(()=>{
        const bg = document.querySelector('.bakcground-images');
    const windowWidth = window.innerWidth / 5;
    const windowHeight = window.innerHeight / 5 ;
    
    bg.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX / windowWidth;
      const mouseY = e.clientY / windowHeight;
      
      bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
    });
    },[])


  return (
    <div className='bakcground-images'>
            <div className='images' id='light'>
                <img src={credit} alt=''/>
            </div>

            <div className='images' id='black'>
                <img src={dashboard} alt=''/>
            </div>

            <div className='images'>
                <img src={dashl} alt=''/>
            </div>

            <div className='images' id='black'>
                <img src={galuhome} alt=''/>
            </div>

            <div className='images' id='light'>
                <img src={galulight} alt=''/>
            </div>

            <div className='images'>
                <img src={galuLog} alt=''/>
            </div>

            <div className='images' id='res'>
                <img src={glaures} alt=''/>
            </div>

            <div className='images' id='kmk'>
                <img src={kmkLand} alt=''/>
            </div>

            <div className='images' id='res'>
                <img src={kmkres} alt=''/>
            </div>

            <div className='images'>
                <img src={portfolio} alt=''/>
            </div>

        </div>
  )
}

export default ImageComponent