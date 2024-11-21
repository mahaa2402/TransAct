import React, { useState } from 'react';
import './UserLogin.css';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailError === '' && email !== '' && password !== '') {
      setSuccessMessage('Login Successful!');
      // Navigate to homepage after a successful login
      navigate('/'); // Adjust this path as needed for your homepage
    } else {
      setSuccessMessage('');
      alert('Please fill out the form correctly.');
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-heading">User Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email ID:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
          {emailError && <p className="error-message">{emailError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="btn-login">Login</button>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <p className="success-message">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default UserLogin;
