import React from "react";

import "./DestinationSection.css";

import Corousel from "../corousel-section/Courosel";

function DestinationSection() {
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
