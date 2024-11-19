import React from 'react'

const Contact = () => {
  return (
    <section id="contact">
        <h2>Contact Us</h2>
        <p>If you need more information, feel free to contact us.</p>
        <form id="contact-form">
            <input type="text" id="name" placeholder="Your Name" required />
            <input type="email" id="email" placeholder="Your Email" required />
            <textarea id="message" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn">Send Message</button>
        </form>
    </section>
  )
}

export default Contact