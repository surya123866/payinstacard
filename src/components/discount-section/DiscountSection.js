import React,{useState,useEffect} from "react";

import "./DiscountSection.css";

import image40 from "../../assets/image40.png";

function DiscountSection() {
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
    <div className="discountSection-container">
      <div className="discount-left-container">
        <svg
          className="Subtract"
          xmlns="http://www.w3.org/2000/svg"
          width="59"
          height="59"
          viewBox="0 0 59 59"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.5 59C45.7924 59 59 45.7924 59 29.5C59 13.2076 45.7924 0 29.5 0C13.2076 0 0 13.2076 0 29.5C0 45.7924 13.2076 59 29.5 59ZM29.5 45.6548C38.422 45.6548 45.6548 38.422 45.6548 29.5C45.6548 20.578 38.422 13.3452 29.5 13.3452C20.578 13.3452 13.3452 20.578 13.3452 29.5C13.3452 38.422 20.578 45.6548 29.5 45.6548Z"
            fill="#F8E27E"
            fillOpacity="0.25"
          />
        </svg>
        <div className="discount-left-text-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
          >
            <path
              d="M8.61466e-06 38C9.48718e-06 33.0098 0.982913 28.0684 2.89259 23.458C4.80227 18.8476 7.60133 14.6586 11.13 11.1299C14.6586 7.60131 18.8477 4.80225 23.458 2.89257C28.0684 0.98289 33.0098 -7.73478e-06 38 -6.64413e-06L38 13.4895C34.7812 13.4895 31.594 14.1235 28.6202 15.3552C25.6465 16.587 22.9445 18.3924 20.6685 20.6684C18.3924 22.9445 16.587 25.6465 15.3552 28.6202C14.1235 31.594 13.4895 34.7812 13.4895 38L8.61466e-06 38Z"
              fill="#BE554B"
            />
          </svg>
          <div className="dicount-text">
            <p className="discount-offer-text">Get 20% off for student</p>
            <h1 className="discount-text">
              Student discounts available.
              <br />
              <span className="discount-span-text">
                Get ready for some fun in the sun!
              </span>
            </h1>
          </div>
          <ul className="discount-list-container">
            <li className="discount-list">Lorem ipsum dolor sit am</li>
            <li className="discount-list">et Eros non pellentesque elit</li>
            <li className="discount-list">Massa quis natoque sit quam</li>
            <li className="discount-list">tortor id euismod habitant</li>
            <li className="discount-list">Sed suspendisse id in ultrices</li>
          </ul>
          <button className="explore-more-button">Explore More</button>
        </div>
      </div>
      {isLargeScreen?(<div className="discount-right-container">
        <img src={`${image40}`} alt="image40" />
      </div>):("")}
    </div>
  );
}

export default DiscountSection;
