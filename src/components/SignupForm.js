import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { EmailContext } from '../context/context';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    qualifications: '',
    password: '',  
  });

  const navigate = useNavigate(); 
  const { setEmail } = useContext(EmailContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Sending request to sign up with form data:', formData);

      const response = await axios.post('http://localhost:5000/user', formData);

      console.log('Response from server:', response.data);

      console.log('Response email :', response.data.user.email);
      setEmail(response.data.user.email);

      // Check if the message from the server is 'success'
      if (response.data.message === 'success') {
        navigate('/home'); // Navigate to home page
      } else {
        // Handle other messages or errors
        alert(response.data.message || 'Sign up failed');
      }
    } catch (error) {
      // Log the error if the request fails
      console.error('Error signing up:', error.message);
      alert('Error signing up: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" onChange={handleChange} placeholder="Email" required />
      <input type="tel" name="phone" onChange={handleChange} placeholder="Phone" required />
      <input type="text" name="qualifications" onChange={handleChange} placeholder="Qualifications" required />
      <input type="password" name="password" onChange={handleChange} placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
