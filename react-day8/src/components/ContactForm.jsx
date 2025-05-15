import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ContactForm() {
    // State creation
    const [formData, setFormData] = useState({username: "", email: ""});

    // Input handling
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const navigate = useNavigate();

    // Submit function
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted: ", formData);
        alert("Form submitted successfully");
        navigate("/");
    }
  return (
    <div>
        <h3>Contact Form</h3>

        <form onSubmit={handleSubmit}>
            <input type="text" name='username' onChange={handleChange} placeholder='Enter your name' /><br />
            <input type="text" name='email' onChange={handleChange} placeholder='Enter your email' /><br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ContactForm