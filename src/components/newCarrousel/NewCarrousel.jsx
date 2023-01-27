import React, {useEffect, useState} from 'react'
import './newCarrousel.css'


const NewCarrousel = () => {

    const[elements, setElements]= useState([])

    useEffect(()=>{
            const grande = document.querySelector('.grande')
            const punto = document.querySelector('.punto')
            setElements(elements.push(punto))

            console.log(elements)

            elements.forEach((cadaPunto, i)=>{
            elements[i].addEventListener('click',()=>{
                
                let posicion= i
                let operacion = posicion * -50

                grande.style.transform= `translateX(${operacion})`

                elements.forEach((cadaPunto, i)=>{
                    elements[i].classList.remove('activo')

                })
                elements[i].classList.add('activo')


            })
        })
        

    },[])


  return (
    <div className='carrousel-container-1'>
        <div className='grande'>
        <img src="#" alt="img1" />
        <img src="#" alt="img2" />
        </div>

        <ul className='puntos'>
            <li className='punto'></li>
            <li className='punto'></li>
        </ul>
    </div>
  )
}

export default NewCarrousel