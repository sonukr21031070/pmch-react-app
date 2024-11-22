import React from "react";
import Navbar from "./Navbar"; 
import "./HomePage.css";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
  const navigate = useNavigate(); 
  
  
    const handleClick = () => {
      navigate("/doctors");
    };
  return (
    <div className="homepage">
 
      <section className="block">
        <div className="block-content">
          <h1>Your Health, Our Mission</h1>
          <p>We provide the best healthcare services with trusted professionals.</p>
          <button className="cta-button" onClick={handleClick}>Book an Appointment</button>
        </div>
        <img
          src="hospitalblock.jpg"
          alt="Hospital block"
          className="block-image"
        />
      </section>

   
      <section id="services" className="services">
        <h2>Our Core Services</h2>
        <div className="service-cards">
          <div className="card">
            <img
              src="pediatrician.jpg"
              alt="Pediatrics"
            />
            <h3>Pediatrics</h3>
            <p>Quality care for your little ones.</p>
          </div>
          <div className="card">
            <img
              src="cardiology.jpg"
              alt="Cardiology"
            />
            <h3>Cardiology</h3>
            <p>Comprehensive heart care.</p>
          </div>
          <div className="card">
            <img
              src="ortho.jpg"
              alt="Orthopedics"
            />
            <h3>Orthopedics</h3>
            <p>Bone and joint specialists.</p>
          </div>
        </div>
      </section>

      <section id="feedbacks" className="feedbacks">
        <h2>What Our Patients Say</h2>
        <div className="feedback">
          <div className="userfeedback">
            <img
              src="user1.jpeg"
              alt="Happy Patient"
              className="userfeedback-image"
            />
            <p>"The doctors and staff were incredibly professional and kind."</p>
            <h4>- Gaurav Kumar</h4>
          </div>
          <div className="userfeedback">
            <img
              src="user2.png"
              alt="Satisfied Patient"
              className="userfeedback-image"
            />
            <p>"A seamless experience from appointment to treatment!"</p>
            <h4>- Kundan Kumar</h4>
          </div>
        </div>
      </section>

    
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 pmch. All Rights Reserved.</p>
          <p>Contact us: +91-8178148032 | info@pmch.com</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
