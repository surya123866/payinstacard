import React, { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import "./Corousel.css";

import image1 from "../../assets/card-image1.png";
import image2 from "../../assets/card-image2.png";
import image3 from "../../assets/card-image3.png";
import image4 from "../../assets/card-image4.png";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const handleSlide = (index) => {
    setCurrentIndex(index);
  };

  const carouselData = [
    {
      name: "Harvard University",
      address: "Cambridge, Massachusetts, UK",
      image: image1,
    },
    {
      name: "Oxford University",
      address: "Oxford, England",
      image: image2,
    },
    {
      name: "Stanford University",
      address: "Stanford, California",
      image: image3,
    },
    {
      name: "Nanyang Technological University",
      address: "Nanyang Ave, Singapura",
      image: image4,
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <div className={`${isLargeScreen?("carousel-inner-row"):("carousel-inner-column")}  custom-carousel-inner`}>
              {carouselData.map((item, index) => (
                <div
                  key={index}
                  className={`carousel-item ${
                    currentIndex === index ? "active" : ""
                  }`}
                >
                  <div className="card">
                    <div
                      className="img"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <div className="rating-container">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                        >
                          <path
                            d="M10 4L12.472 8.93691L18 9.73344L14 13.5741L14.944 19L10 16.4369L5.056 19L6 13.5741L2 9.73344L7.528 8.93691L10 4Z"
                            fill="#EBD402"
                            stroke="#EBD402"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <h1 className="rating-number">4.8</h1>
                      </div>
                    </div>

                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.address}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="navigaion-control">
              <a
                className="carousel-control-prev custom-carousel-control"
                href="#myCarousel"
                role="button"
                data-slide="prev"
                onClick={() => handleSlide(currentIndex - 1)}
              >
                <AiOutlineArrowLeft className="custom-carousel-control-icon sr-only" />
              </a>
              <p>2/140</p>
              <a
                className="carousel-control-next custom-carousel-control"
                href="#myCarousel"
                role="button"
                data-slide="next"
                onClick={() => handleSlide(currentIndex + 1)}
              >
                <AiOutlineArrowRight className="custom-carousel-control-icon sr-only" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
