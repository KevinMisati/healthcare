import React from 'react'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="hero">
    <div className="hero-content">
        <h1>Welcome to Keumbu Hospital</h1>
        <p className='text-dark-700'>Where care meets compassion. We are dedicated to providing exceptional healthcare to our community. Your health and well-being are our priority. Book an appointment with our expert medical team today.</p>
        <Link href="/appointment" className="shad-primary-btn w-full hero-btn">
                Book an Appointment
        </Link>
    </div>
</section>

            
  )
}

export default HeroSection