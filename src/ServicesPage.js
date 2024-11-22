import React from "react";
import "./ServicesPage.css";

const ServicesPage = () => {
  const services = [
    {
      title: "General Checkup",
      description: "Routine checkups to ensure optimal health.",
      image: "general.jpg",
    },
    {
      title: "Pediatrics",
      description: "Comprehensive care for your children.",
      image: "pediatrician.jpg",
    },
    {
      title: "Cardiology",
      description: "Specialized heart care and monitoring.",
      image: "cardiology.jpg",
    },
    {
      title: "Orthopedics",
      description: "Expert treatment for bones, joints, and muscles.",
      image: "ortho.jpg",
    },
    {
      title: "Dermatology",
      description: "Advanced skin care treatments and advice.",
      image: "derm.jpg",
    },
    {
      title: "Emergency Care",
      description: "Immediate care for life-threatening situations.",
      image: "emergency.jpg",
    },
  ];

  return (
    <div className="services-page">
      <div className="services-block">
        <h1>Our Healthcare Services</h1>
        <p>
          We are dedicated to providing quality healthcare services to meet the
          needs of our community. Explore our wide range of medical services
          below.
        </p>
      </div>

      <div className="services">
        <div className="service-cards">
          {services.map((service, index) => (
            <div className="card" key={index}>
              <img
                src={service.image}
                alt={service.title}
                className="card-img"
              />
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
