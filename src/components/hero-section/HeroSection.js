import React,{useState,useEffect} from "react";

import image from "../../assets/image37.png";
import "./HeroSection.css";

function HeroSection() {
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
    <div className="hero-section-container">
      <div className="hero-banner-left-section">
        <svg
          className="Ellipse46"
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
        >
          <path
            d="M0 64C0 55.5954 1.65541 47.2731 4.87171 39.5083C8.08801 31.7434 12.8022 24.6881 18.7452 18.7452C24.6881 12.8022 31.7434 8.08801 39.5083 4.87171C47.2731 1.65541 55.5954 -3.67377e-07 64 0V19.2C58.1168 19.2 52.2912 20.3588 46.8558 22.6102C41.4204 24.8616 36.4817 28.1616 32.3216 32.3216C28.1616 36.4817 24.8616 41.4204 22.6102 46.8558C20.3588 52.2912 19.2 58.1168 19.2 64H0Z"
            fill="#BE554B"
          />
        </svg>
        <div>
          <p className="hero-banner-section-text">
            Discover the beauty of the tropics
          </p>
          <h1 className="hero-banner-header">
            Tropical <br />
            Destinations <br />
            <span className="hero-banner-header-span">For Student</span>
          </h1>
        </div>
        <p className="description-text">
          Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum
          integer rutrum nisi. A nec nisl vitae
        </p>
        <button className="sign-up-button">SIGN UP</button>
      </div>
      <div className="hero-banner-right-section">
       
          <svg
            className="Ellipse48"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M14 2.03465e-06C14 1.83851 13.6379 3.65901 12.9343 5.35757C12.2307 7.05613 11.1995 8.59948 9.89949 9.8995C8.59947 11.1995 7.05612 12.2308 5.35756 12.9343C3.65901 13.6379 1.8385 14 -3.8147e-06 14L-4.13185e-07 -4.13186e-07L14 2.03465e-06Z"
              fill="#87CC81"
            />
          </svg>
          <svg
            className="Ellipse49"
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
          >
            <path
              d="M35 35C35 30.4037 34.0947 25.8525 32.3358 21.6061C30.5769 17.3597 27.9988 13.5013 24.7487 10.2513C21.4987 7.00121 17.6403 4.42313 13.3939 2.66422C9.14752 0.905301 4.59626 -2.00909e-07 0 0V14C2.75776 14 5.48851 14.5432 8.03635 15.5985C10.5842 16.6539 12.8992 18.2007 14.8492 20.1508C16.7993 22.1008 18.3461 24.4158 19.4015 26.9636C20.4568 29.5115 21 32.2422 21 35H35Z"
              fill="#BE554B"
            />
          </svg>
          <svg
            className="Subtract"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM6.83352 10.3335C8.76652 10.3335 10.3335 8.76652 10.3335 6.83352C10.3335 4.90053 8.76652 3.33352 6.83352 3.33352C4.90053 3.33352 3.33352 4.90053 3.33352 6.83352C3.33352 8.76652 4.90053 10.3335 6.83352 10.3335Z"
              fill="#505C59"
            />
          </svg>
        
        {isLargeScreen?(<div className="avatar-circle">
          <img
            className="avatar-img"
            src={`${image}`}
            alt="Avatar"
          />
        </div>):("")}
      </div>
    </div>
  );
}

export default HeroSection;
