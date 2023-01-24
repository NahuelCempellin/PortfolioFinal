import React,{useEffect} from 'react'
import './Projects.css'
import { Link } from 'react-router-dom'


const ProjectsCarrousel = () => {

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
    <div className='Project-carrousel-container'>
<section className="slider-wrapper">
  <button className="slide-arrow" id="slide-arrow-prev">
    &#8249;
  </button>
  <button className="slide-arrow" id="slide-arrow-next">
    &#8250;
  </button>
  <ul className="slides-container" id="slides-container">
    <li className="slide"></li>
    <li className="slide"></li>
    <li className="slide"></li>
    {/* <li className="slide"></li> */}
  </ul>
</section>
</div>
  )
}

export default ProjectsCarrousel