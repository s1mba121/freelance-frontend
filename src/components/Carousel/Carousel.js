import React, { useState, useEffect } from 'react';
import './Carousel.css'; // CSS для карусели

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    'https://via.placeholder.com/240x360?text=1',
    'https://via.placeholder.com/240x360?text=2',
    'https://via.placeholder.com/240x360?text=3',
    'https://via.placeholder.com/240x360?text=4',
    'https://via.placeholder.com/240x360?text=5',
    'https://via.placeholder.com/240x360?text=6',
    'https://via.placeholder.com/240x360?text=7',
  ];

  const moveToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const moveToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const updateCardStyles = (index) => {
    const offset = (index - currentIndex + cards.length) % cards.length;
    const xPosition = (offset - 3) * 150;
    const scale = 1 - Math.abs(offset - 3) * 0.1;
    const opacity = offset === 3 ? 1 : 0.5;
    const zIndex = -Math.abs(offset - 3) + 2;

    return {
      transform: `translateX(${xPosition}px) scale(${scale})`,
      opacity: opacity,
      zIndex: zIndex,
    };
  };

  return (
    <div className="carousel">
      <button className="arrow arrow-left" onClick={moveToPrev}>
        &#8592;
      </button>

      {cards.map((src, index) => (
        <div
          key={index}
          className={`card ${index === currentIndex ? 'active' : ''}`}
          style={updateCardStyles(index)}
        >
          <img src={src} alt={`Карточка ${index + 1}`} />
        </div>
      ))}

      <button className="arrow arrow-right" onClick={moveToNext}>
        &#8594;
      </button>
    </div>
  );
};

export default Carousel;
