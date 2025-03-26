import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form[0].value;
    const email = form[1].value;
    const password = form[2].value;
    const confirmPassword = form[3].value;

    if (password !== confirmPassword) {
      setMessageType('error');
      setMessage('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch('http://localhost:5017/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessageType('success');
        setMessage(data.message || 'Signup successful!');
        setTimeout(() => {
          navigate('/home');
        }, 1500);
      } else {
        setMessageType('error');
        setMessage(data.message || 'Signup failed!');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setMessageType('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className='hi'>
      <div className="sign">
        <div className="f">
          <h1 style={{ color: "black" }}>Signup</h1>
        </div>
        <br />
        <form onSubmit={handleSubmit}>
          <input className="in" type="text" placeholder="Name" required /><br /><br />
          <input className="in" type="email" placeholder="Email" required /><br /><br />
          <input className="in" type="password" placeholder="Password" required /><br /><br />
          <input className="in" type="password" placeholder="Confirm Password" required /><br /><br />

          <p>You already have an account? Just <Link to="/" style={{ textDecoration: "none" ,color:"blue"}}>Login</Link></p>

          <input type="checkbox" id="terms" required />
          <label htmlFor="terms"> I agree to the <span style={{ color: 'blue' }}>Terms and conditions</span></label><br /><br />

          <input className="but" style={{ width: "10vw" }} type="submit" value="Signup" />
        </form>

        {message && (
          <div style={{
            marginTop: '20px',
            padding: '10px',
            color: messageType === 'success' ? 'green' : 'red',
            fontWeight: 'bold'
          }}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
