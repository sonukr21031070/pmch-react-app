import React from "react";
import { Link } from "react-router-dom";
import "./Doctors.css";

const doctorsData = [
  {
    id: 1,
    name: "Dr. Ashok Vaid ",
    specialty: "Cardiologist",
    experience: "10 years",
    rating: 4.8,
    availableSlots: ["10:00 AM", "11:30 AM", "02:00 PM"],
    image:"./doctor4.avif"
  },
  {
    id: 2,
    name: "Dr. Y K Mishra",
    specialty: "Dermatologist",
    experience: "7 years",
    rating: 4.5,
    availableSlots: ["09:00 AM", "01:00 PM", "04:00 PM"],
    image:"./doctor5.jpg"
  },
  {
    id: 3,
    name: "Dr. Ajay Kaul",
    specialty: "Pediatrician",
    experience: "12 years",
    rating: 4.9,
    availableSlots: ["08:30 AM", "12:00 PM", "03:30 PM"],
    image:"./doctor6.jpg"
  }
];

const Doctors = () => {
  return (
    <div className="doctors-page">
      <h1>Meet Our Doctors</h1>
      <div className="doctor-cards">
        {doctorsData.map((doctor) => (
          <div className="doctor-card" key={doctor.id}>
            <img src={doctor.image} alt={doctor.name} className="doctor-image" />
            <h3>{doctor.name}</h3>
            <p><strong>Specialty:</strong> {doctor.specialty}</p>
            <p><strong>Experience:</strong> {doctor.experience}</p>
            <p><strong>Rating:</strong> {doctor.rating}</p>
            <Link to={`/book-appointment/${doctor.id}`} className="book-button">
              Book Appointment
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
