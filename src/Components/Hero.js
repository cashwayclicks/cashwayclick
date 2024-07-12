import React, { useEffect, useState } from "react";
import Doctor from "../Assets/doctor-picture.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">💙 Together We Grow</p>
          <h2 className="text-title">
          Keep progressing  Keep earning💸
          </h2>
          <p className="text-descritpion">
          Explore our core training programs and consult with our coordinators for personalized guidance on your journey 
          to financial independence.
           Discover the pathways to success that align with your goals and ambitions. Our team is here to assist you every step of the way, ensuring you gain the skills and confidence needed to achieve financial freedom. 
          Join us and empower yourself with knowledge and strategies tailored to your aspirations. Let's embark on this transformative journey together.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} />  JOIN CWC
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>1920+</p>
              <p>successful trainings</p>
            </div>

            <div className="text-stats-container">
              <p>15+</p>
              <p>coordinators</p>
            </div>

            <div className="text-stats-container">
              <p>5+</p>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
