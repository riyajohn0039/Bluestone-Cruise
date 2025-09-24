"use client";
import React, { useState, useEffect } from "react";
import styles from "./carousel.module.css";

import slide1 from "../../assets/images/image-1.jpg";
import slide2 from "../../assets/images/image-2.jpg";
import slide3 from "../../assets/images/image-3.jpg";
import slide4 from "../../assets/images/image-4.jpg";

const slides = [
  { id: 1, img: slide1 },
  { id: 2, img: slide2 },
  { id: 3, img: slide3 },
  { id: 4, img: slide4 },
];

const Carousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className={styles.carousel}>
      {/* Background Image */}
      <img
        src={slides[current].img.src}
        alt={`Slide ${current + 1}`}
        className={styles.carouselImage}
      />

      {/* Text Overlay */}
      <div className={styles.textOverlay}>
        <p className={styles.smallText}>THE BEST WAY TO</p>
        <h1 className={styles.mainHeading}>EXPERIENCE</h1>
        <h1 className={styles.highlight}>THE BAY</h1>
        <p className={styles.subText}>PRIVATE CHARTERS</p>
        <button className={styles.btn}>LEARN MORE</button>
      </div>

      {/* Navigation Arrows */}
      <button onClick={prevSlide} className={`${styles.arrow} ${styles.leftArrow}`}>
        &#8592;
      </button>
      <button onClick={nextSlide} className={`${styles.arrow} ${styles.rightArrow}`}>
        &#8594;
      </button>

      {/* Dots */}
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`${styles.dot} ${idx === current ? styles.activeDot : ""}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
