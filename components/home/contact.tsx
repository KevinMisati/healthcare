import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className='contact-section'>
      <div className='contact-content'>
        <h2>Contact Us</h2>
        <p>If you need more information, feel free to contact us.</p>
        <form id="contact-form">
            <input type="text" id="name" placeholder="Your Name" required />
            <input type="email" id="email" placeholder="Your Email" required />
            <textarea id="message" placeholder="Your Message" required></textarea>
            <button type="submit" className="shad-primary-btn w-full hero-btn" >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact