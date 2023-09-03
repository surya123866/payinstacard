import React,{useState,useEffect} from "react";

import './FooterSection.css'

function FooterSection() {
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
    <div className="footer-container">
      <div className="footer-header-container">
        <h1 className="footer-header">
          Student Special: Discounted rates on tropical getaways!
        </h1>
        <p className="footer-sub-heading">
          Let’s embody your beautiful ideas together, simplify the way you
          visualize your next big things.
        </p>
      </div>
      <ul className="legal-info-section">
        <li className="leagal-info-text">Privacy Policy</li>
        <li className="leagal-info-text">Terms of Use</li>
        <li className="leagal-info-text">Sales and Refunds</li>
        <li className="leagal-info-text">Legal</li>
        <li className="leagal-info-text">About</li>
        <li className="leagal-info-text">Schedules</li>
        <li className="leagal-info-text">Pricing</li>
        <li className="leagal-info-text">Membership</li>
        <li className="leagal-info-text">Joins</li>
      </ul>
    </div>
  );
}

export default FooterSection;
