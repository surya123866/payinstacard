import React from "react";

import "./BookNowSection.css";
import image41 from "../../assets/Group 167.png"

function BookNowSection() {
  return (
    <div className="booknow-section-container">
     
      <div className="booknow-left-container">
        <img src={`${image41}`} alt="avatar" className="image41"/>
      </div>
      <div className="booknow-right-container">
        <div className="book-now-form-header">
          <h1 className="book-now-text">Book Now</h1>
          <p className="form-decription-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className="inputs-container">
          <div className="city-input-container">
            <h1 className="city-text">City</h1>
            <div>
              <input
                type="text"
                placeholder="Placeholder"
                className="city-input-box"
              />
            </div>
          </div>
          <div className="arrival-departure-container">
            <div className="arrival-container">
              <h1 className="arrival-text">Arrival</h1>
              <div>
                <input
                  type="text"
                  className="arrival-input"
                  placeholder="Arrival"
                />
              </div>
            </div>
            <div className="departure-container">
              <h1 className="departure-text">Departure</h1>
              <div>
                <input
                  type="text"
                  className="departure-input"
                  placeholder="Departure"
                />
              </div>
            </div>
          </div>
          <div className="star-room-container">
            <div className="star-container">
              <h1 className="star-text">Star</h1>
              <div className="star-button-input-container">
              <button className="star-button">-</button>
                <input
                  type="text"
                  className="star-input"
                  placeholder="4"
                />
                 <button className="star-button">+</button>
              </div>
            </div>
            <div className="room-container">
              <h1 className="room-text">Room</h1>
              <div className="star-button-input-container">
                <button className="star-button">-</button>
                <input
                  type="text"
                  className="room-input"
                  placeholder="1"
                />
                <button className="star-button">+</button>
              </div>
            </div>
          </div>
        </div>
        <div className="button-container">
          <button className="book-now-button">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default BookNowSection;
