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
          <a className="anchor-tag"  href="/">Home</a> {/* Provide valid href */}
        </li>
        <li className="header-option">
          <a href="/about">About</a> {/* Provide valid href */}
        </li>
        <li className="header-option">
          <a className="anchor-tag" href="/schedules">Schedules</a> {/* Provide valid href */}
        </li>
        <li className="header-option">
          <a className="anchor-tag" href="/membership">Membership</a> {/* Provide valid href */}
        </li>
        <li className="header-option">
          <a className="anchor-tag" href="/services">Services</a> {/* Provide valid href */}
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
            <a className="anchor-tag" href="/">Home</a> {/* Provide valid href */}
          </li>
          <li>
            <a className="anchor-tag" href="/about">About</a> {/* Provide valid href */}
          </li>
          <li>
            <a className="anchor-tag" href="/membership">Membership</a> {/* Provide valid href */}
          </li>
          <li>
            <a className="anchor-tag" href="/services">Services</a> {/* Provide valid href */}
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
