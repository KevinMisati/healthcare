import React from 'react'

const Services = () => {
  return (
    <section id="services">
        <h2>Our Services</h2>
        <div className="service-cards">
            <div className="service-card">
                <h3>General Consultation</h3>
                <p>Expert medical advice and general consultations for all ages.</p>
            </div>
            <div className="service-card">
                <h3>Specialist Consultation</h3>
                <p>Access to a variety of specialist doctors in various fields.</p>
            </div>
            <div className="service-card">
                <h3>Emergency Services</h3>
                <p>Immediate care for urgent medical situations, 24/7.</p>
            </div>
        </div>
    </section>
  )
}

export default Services