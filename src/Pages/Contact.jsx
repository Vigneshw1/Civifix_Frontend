import React, { useState } from 'react';
import Nav from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import './Contact.css';
import loc from './location_.png';
import em from './email.png';
import ph from './phone.png';

const Contact = () => {
  const navigate = useNavigate();

  // Form fields state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    msg: '',
  });

  // Validation errors
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    // Clear error on typing
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: '',
    }));
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.msg.trim()) newErrors.msg = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch('http://localhost:5017/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/thankyou');
      } else {
        setErrors({ form: data.message || 'Submission failed' });
      }
    } catch (err) {
      console.error('Contact form error:', err);
      setErrors({ form: 'Something went wrong. Please try again.' });
    }
  };

  return (
    <div>
      <Nav />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className='pol'>
          <div className='c-jk'>
            <h1 style={{ color: 'black', display: 'flex', justifyContent: 'center' }}>Get in Touch</h1>
            <form className='h-jk' onSubmit={handleSubmit}>
              <label>Name</label>
              <input
                style={{ marginTop: '3px'}}
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className='error' style={{color:"red",fontSize:"18px"}}>{errors.name}</span>}
              <br />

              <label>Email</label>
              <input
                style={{ marginTop: '3px' }}
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className='error' style={{color:"red",fontSize:"18px"}}>{errors.email}</span>}
              <br />

              <label>Message</label>
              <textarea
                style={{ marginBottom: '10px', width: '84vh' }}
                name='msg'
                value={formData.msg}
                onChange={handleChange}
              />
              {errors.msg && <span className='error' style={{color:"red",fontSize:"18px"}}>{errors.msg}</span>}

              <br />
              <button
                style={{ margin: '1px', width: '250px', alignSelf: 'center' }}
                type='submit'
              >
                Submit Message
              </button>

              {errors.form && <p className='error' style={{ marginTop: '10px' }}>{errors.form}</p>}
            </form>
          </div>

          <div className='d-jk'>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2vw' }}>
              <img src={loc} style={{ height: '8vh', width: '4vw' }} alt="location" />
              <h2>Address</h2>
            </div>
            <p>123, Vivekanandhar Street, Dubai Kurukusandhu, Dubai</p>
            <br />
            <div style={{ display: 'flex', alignItems: 'center', gap: '2vw' }}>
              <img src={ph} style={{ height: '8vh', width: '4vw' }} alt="phone" />
              <h2>Phone</h2>
            </div>
            <p>+91 1234567890</p>
            <br />
            <div style={{ display: 'flex', alignItems: 'center', gap: '2vw' }}>
              <img src={em} style={{ height: '8vh', width: '4vw' }} alt="email" />
              <h2>Email</h2>
            </div>
            <p>civicfix@gmail.com</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
