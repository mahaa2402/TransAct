import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './UserLogin.css'; // Reusing the same CSS for styling

const SignUp = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Here you can add your logic for handling sign-up
    // For now, we'll just navigate to the login page
    navigate('/UserLogin'); // Adjust this path as needed
  };

  return (
    <div className="login-container">
      <h1 className="login-heading">Sign Up</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email ID:</label>
          <input type="text" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Set Password:</label>
          <input type="password" id="password" placeholder="Enter your password" />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input type="password" id="confirm-password" placeholder="Re-enter your password" />
        </div>
        <button type="submit" className="btn-login">Sign Up</button>
        <p className="success-message">
          Already have an account? <Link to="/UserLogin">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
