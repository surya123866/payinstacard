import React, { useState, useEffect } from "react";
import image1 from "../../assets/Eclipse1.png";
import image2 from "../../assets/Eclipse2.png";
import image3 from "../../assets/Eclipse3.png";

import "./Testimonials.css";

function Testimonials() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={`${
      isLargeScreen
        ? "testimonial-bg-container-row"
        : "testimonial-bg-container-column"
    }`}>
      <h1 className="testimonials-heading">Testimonials</h1>
      <div
        className={`${
          isLargeScreen
            ? "testimonials-container-row"
            : "testimonials-container-column"
        }`}
      >
        <div className="testimonial-container">
          <img src={`${image1}`} alt="" className="image" />
          <h1 className="name-text">Corey Korsgaard</h1>
          <p className="feedback">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="testimonial-container">
          <img src={`${image2}`} alt="" className="image" />
          <h1 className="name-text">Corey Korsgaard</h1>
          <p className="feedback">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="testimonial-container">
          <img src={`${image3}`} alt="" className="image" />
          <h1 className="name-text">Corey Korsgaard</h1>
          <p className="feedback">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
