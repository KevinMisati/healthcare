"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      const response: EmailJSResponseStatus = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );

      console.log('Email sent successfully!', response);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' }); 
    } catch (err) {
      console.error('Error sending email:', err);
      setError('Failed to send the email. Please try again later.');
    }
  };
  return (
    <section id="contact" className='contact-section'>
      <div className='contact-content'>
        {isSubmitted && <p>Thank you! Your message has been sent.</p>}
        {!isSubmitted && 
          <>
            <h2>Contact Us</h2>
            <p>If you need more information, feel free to contact us.</p>
            <form id="contact-form">
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Your Name" 
                  required 
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                />
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Your Email" 
                  required 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <textarea 
                  id="message" 
                  placeholder="Your Message" 
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                <button 
                  type="submit" 
                  className="shad-primary-btn w-full hero-btn" 
                  onClick={handleSubmit}
                  >
                    Send Message

                </button>
            </form>
          </>
        }
      </div>
    </section>
  )
}

export default Contact