import React from 'react'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="hero">
        <div className="hero-content">
            <h1>Welcome to Our Hospital</h1>
            <p>Your health is our top priority. Book appointments easily online.</p>
            <Link href="/appointment" className="text-green-500 btn">
                Book an Appointment
            </Link>
        </div>
    </section>
            
  )
}

export default HeroSection