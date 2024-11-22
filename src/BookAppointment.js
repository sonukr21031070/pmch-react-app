import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./BookAppointment.css";


const doctorsData = [{
  name: "Dr. Ashok Vaid ",
    id: 1,
    specialty: "Cardiologist",
    experience: "10 years",
    rating: 4.8,
    availableSlots: ["10:00 AM", "11:30 AM", "02:00 PM"],
    image:"./doctor4.avif"
  },

  {
    name: "Dr. Y K Mishra",
    id: 2,
    specialty: "Dermatologist",
    experience: "7 years",
    rating: 4.5,
    availableSlots: ["09:00 AM", "01:00 PM", "04:00 PM"],
    image:"./doctor5.jpg"
  },
  {
    name: "Dr. Ajay Kaul",
    id: 3,
    specialty: "Pediatrician",
    experience: "12 years",
    rating: 4.9,
    availableSlots: ["08:30 AM", "12:00 PM", "03:30 PM"],
    image:"./doctor6.jpg"
  }
];

const BookAppointment = () => {
  const { id } = useParams(); 

  const [doctor, setDoctor] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    selectedSlot: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

 
  useEffect(() => {
    const selectedDoctor = doctorsData.find((doctor) => doctor.id === parseInt(id));
    setDoctor(selectedDoctor);
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 
  const validateForm = () => {
    const errors = {};
   

    if (!formData.name) errors.name = "Name is required!";
 

    if (!formData.email) 
      {
        errors.email = "Email is required!";
      }

    else if (!/\S+@\S+\.\S+/.test(formData.email)){
       errors.email = "Email is invalid!";
    }
    if (!formData.phone) {
      errors.phone = "Phone number is required!";
    }

    if (!formData.selectedSlot) {
      errors.selectedSlot = "Please select a time slot!";
    }
    return errors;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {


      console.log("Appointment Details:", formData);
      setIsSubmitted(true);

      alert("Appointment booked successfully!");
    }
  };


  if (!doctor) {
    return <p>Loading doctor details...</p>;
  }

  return (
    <div className="book-appointment">
      <h1>Book Appointment</h1>
      <h2>{doctor.name}</h2>
      <p><strong>Specialty:</strong> {doctor.specialty}</p>

      <p><strong>Experience:</strong> {doctor.experience}</p>
      <p><strong>Rating:</strong> {doctor.rating}</p>
      
      <form onSubmit={handleSubmit}>
     
        <label>
          Your Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            
          />
        </label>
        { formErrors.name   && <p className="error" style={{ color: "red" }}>{formErrors.name}</p>}
      
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email }
            onChange= {handleChange}
            
          />
        </label>
        {formErrors.email && <p className="error" style={{ color: "red" }}>{formErrors.email}</p>}

     
        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
            value={formData.phone}

            onChange={handleChange}
         
          />
        </label>
        {formErrors.phone && <p className="error" style={{ color: "red" }}>{formErrors.phone}</p>}
        
 
        <label>
          Select Slot:
          <select
            name="selectedSlot"
            value={formData.selectedSlot}

            onChange={handleChange}
            
          >
            <option value="" disabled>Select a time slot</option>
            {doctor.availableSlots.map((slot, index) => (
              <option key={index} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </label>
        {formErrors.selectedSlot && <p className="error" style={{ color: "red" }}>{formErrors.selectedSlot}</p>}

     
        <button type="submit">Confirm Appointment</button>
      </form>

      {isSubmitted && (
        <div className="confirmation">
          <p>Your appointment with {doctor.name} has been booked successfully!</p>
        </div>
      )}
    </div>
  );
};

export default BookAppointment;