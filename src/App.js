import React from "react";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import ServicesPage from "./ServicesPage";

import Doctors from "./Doctors";
import BookAppointment from "./BookAppointment";

import { Routes, Route } from "react-router-dom";
import ContactPage from "./Contact";


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/doctors" element={<Doctors />} />

        <Route path="/book-appointment/:id" element={<BookAppointment />} />
        <Route path="/contact" element={<ContactPage />} />
     
      </Routes>
    </div>
  );
};

export default App;
