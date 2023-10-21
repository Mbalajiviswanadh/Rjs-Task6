

import React, { useState } from 'react';
import { contact } from '../../portfolio';
import './Contact.css';

const Contact = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });

  const { name, email, feedback } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your submit logic here
    console.log('Form submitted:', formData);
    // You can send the form data to your backend or handle it as needed.
  };

  return (
    <section className='section contact ' id='contact'>
      <h2 >contact<span id='pur-color'>.me()</span></h2>
      <form className='contact-form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='//your name'
          name='name'
          value={name}
          onChange={handleChange}
          required
        />
        <input
          type='email'
          placeholder='//your email'
          name='//email'
          value={email}
          onChange={handleChange}
          required
        />
        <textarea
          placeholder='//your feedback'
          name='//feedback'
          value={feedback}
          onChange={handleChange}
          required
        ></textarea>
        <button type='submit' className='btn btn--outline'>
          .submit()
        </button>
      </form><br></br>
       <a id='mail-box' href={`mailto:${contact.email}`}>
       <span id='email-box' type='button' className='btn btn--outline'>
      <span id='gray-color'>email</span><span id='pur-color'>.me()</span>
              
            </span>
          </a>
    </section>
   
      
  );
};

export default Contact;
