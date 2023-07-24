import React, { useState } from "react";
import "./Carrusel2.css"; // Archivo CSS para estilos
import { GrLinkNext } from "react-icons/gr";

const Carousel2 = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button
        className="carousel__button carousel__button--prev"
        onClick={prevSlide}
      >
        <GrLinkNext style={{ color: "white" }} />
      </button>
      <div className="carousel__slider">
        <div
          className="carousel__slides"
          style={{
            width: `${images.length}00%`,
            transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              className="carousel__slide2"
              src={image}
              alt={`Slide ${index}`}
            />
          ))}
        </div>
      </div>
      <button
        className="carousel__button carousel__button--next"
        onClick={nextSlide}
      >
        <GrLinkNext />
      </button>
    </div>
  );
};

export default Carousel2;
