import React, { useState, useEffect } from "react";

import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const LargeScreenHeader = () => (
    <nav className="header-container">
      <ul className="header-menu-container">
        <li className="header-option">
          <a href="#">Home</a>
        </li>
        <li className="header-option">
          <a href="#">About</a>
        </li>
        <li className="header-option">
          <a href="#">Shedules</a>
        </li>
        <li className="header-option">
          <a href="#">Membership</a>
        </li>
        <li className="header-option">
          <a href="#">Services</a>
        </li>
      </ul>
      <div className="button-container">
        <h1 className="offer-text">Offer</h1>
        <button className="header-button">Courses</button>
      </div>
    </nav>
  );

  const SmallScreenHeader = () => (
    <div className="SmallScreen-header-contaner">
      <div className="button-container">
        <h1 className="offer-text">Offer</h1>
        <button className="header-button">Courses</button>
      </div>
      <nav className="small-device-nav-container">
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <ul className={`menu ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Membership</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
        </ul>
      </nav>
    </div>
  );

  return (
    <div className="header-container">
      {isLargeScreen ? <LargeScreenHeader /> : <SmallScreenHeader />}
    </div>
  );
}

export default Header;
