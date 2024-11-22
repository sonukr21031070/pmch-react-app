import React, { useState, useEffect } from 'react';
import './AboutUs.css';
import Navbar from './Navbar';
function AboutUs() {
  const [team, setTeam] = useState([]); 
  const [loading, setLoading] = useState(true); 


  useEffect(() => {
    const fetchTeam = async () => {
    
      const teamData = [
        { id: 1, name: 'Dr. Prathap C. Reddy', role: 'Chief Medical Officer', image: 'doctor1.jpg' },
        { id: 2, name: 'Dr. Naresh Trehan', role: 'Senior Cardiologist', image: 'doctor2.jpg' },
        { id: 3, name: 'Dr. Randeep Guleria', role: 'Orthopedic Surgeon', image: 'doctor3.jpg' },
      ];

      setTimeout(() => {
        setTeam(teamData); 
        setLoading(false);
      }, 2000);
    };

    fetchTeam();
  }, []);

  return (
    
    <div className="about-us">
     
      <section className="about-block">
        <h1>About Us</h1>
        <p>Dedicated to providing exceptional healthcare services with compassion and expertise.</p>
      </section>

  
      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>To deliver high-quality healthcare services to individuals and families with a focus on excellence, innovation, and patient-centered care.</p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>To be a trusted healthcare provider, enhancing lives through cutting-edge medical care and compassionate support.</p>
        </div>
      </section>

   
      <section className="our-team">
        <h2>Meet Our Team</h2>
        {loading ? (
          <p>Loading team members...</p>
        ) : (
          <div className="team-members">
            {team.map((member) => (
              <div className="team-card" key={member.id}>
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default AboutUs;
