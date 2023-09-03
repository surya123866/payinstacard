import React, { useState, useEffect } from "react";

import "./DestinationSection.css";

import Corousel from "../corousel-section/Courosel";

function DestinationSection() {
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
    <div className="destination-section-container">
      <h1 className="destination-heading">Our Destinations</h1>
      <div className="destination-cards-container">
        <Corousel />
      </div>
    </div>
  );
}

export default DestinationSection;
