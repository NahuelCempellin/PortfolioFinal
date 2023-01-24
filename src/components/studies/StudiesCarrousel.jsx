import React,{useEffect} from 'react'
import './Studies.css'
import { Link } from 'react-router-dom'



const StudiesCarrousel = () => {

    useEffect(()=>{
        const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});
    },[])


  return (
    <div className='studies-carrousel-container'>
<section className="slider-wrapper-studies">
  <button className="slide-arrow-studies" id="slide-arrow-studies-prev">
    &#8249;
  </button>
  <button className="slide-arrow-studies" id="slide-arrow-studies-next">
    &#8250;
  </button>
  <ul className="slides-studies-container " id="slides-studies-container">
    <li className="slide-studies"></li>
    <li className="slide-studies"></li>
    <li className="slide-studies"></li>
    {/* <li className="slide"></li> */}
  </ul>
</section>
</div>
  )
}

export default StudiesCarrousel