import React from 'react'
import Image from 'next/image'

const Services = () => {
    return (
        <section className='services-section' id='services'>
            <div className="row">
                <h2 className="section-heading">Our Services</h2>
            </div>
            <div className="row">
                <div className="column">
                <div className="card">
                    <div className="icon-wrapper">
                    <Image 
                        src="/assets/images/24-hours.png"
                        alt='Emergency Services (24/7 Care)'
                        height={1000}
                        width={1000}
                    />
                    </div>
                    <h3>Emergency Services (24/7 Care)</h3>
                    <p>
                    Round-the-clock medical care for urgent, life-threatening conditions, including trauma, heart attacks, and critical emergencies.
                    </p>
                </div>
                </div>
                <div className="column">
                <div className="card">
                    <div className="icon-wrapper">
                    <Image 
                        src="/assets/images/experience.png"
                        alt='Emergency Services (24/7 Care)'
                        height={1000}
                        width={1000}
                    />
                    </div>
                    <h3>Specialist Consultations</h3>
                    <p>
                    Expert medical consultations in cardiology, neurology, orthopedics, gynecology, and other specialties for accurate diagnosis and personalized treatment.
                    </p>
                </div>
                </div>
                <div className="column">
                <div className="card">
                    <div className="icon-wrapper">
                    <Image 
                        src="/assets/images/surgeon.png"
                        alt='Emergency Services (24/7 Care)'
                        height={1000}
                        width={1000}
                    />
                    </div>
                    <h3>Surgical Services</h3>
                    <p>
                    Comprehensive surgical care, including general, minimally invasive, and specialized procedures, ensuring safe and effective patient outcomes.
                    </p>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Services