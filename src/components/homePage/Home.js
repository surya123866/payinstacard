import React,{useState,useEffect} from "react";
import "./Home.css";

import Header from "../header/Header";
import HeroSection from "../hero-section/HeroSection";
import FooterSection from "../footer-section/FooterSection";
import Testimonials from "../testimonials/Testimonials";
import Destination from "../destinations-section/DestinationSection";
import Advanture from "../advature-section/AdvantureSection";
import Discount from "../discount-section/DiscountSection";
import BookNow from "../booknow-section/BookNowSection";

function Home() {
 
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
    <div className={`${isLargeScreen?("home-page-container"):("mobile-home-page-container")}`}>
      <Header />
      <HeroSection/>
      <Advanture />
      <Destination />
      <Discount />
      <BookNow />
      <Testimonials />
      <FooterSection />
    </div>
  );
}

export default Home;
