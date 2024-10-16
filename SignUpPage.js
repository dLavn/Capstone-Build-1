import React, { useState } from 'react';
import axios from 'axios'; //making API calls
import './SignUpPage.css';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { firstName, lastName, dateOfBirth, email, password } = formData;
    if (!firstName || !lastName || !dateOfBirth || !email || !password) {
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      axios.post('/api/signup', formData)
        .then(response => {
          console.log('User registered:', response.data);
          alert('Sign up successful! You can now log in.');
        })
        .catch(error => {
          console.error('Error registering user', error);
          setError('Error signing up. Please try again.');
        });
    } else {
      setError('Please fill out all fields.');
    }
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
          required
        />
        <input
          type="date"
          name="dateOfBirth"
          placeholder="Birthday"
          value={formData.dateOfBirth}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;