import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Signup = ({ onSignUP }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUP(); // Call the prop function for signup logic (not detailed here, assume it sets signup state)
    navigate('/planets'); // Redirect to /planets after signup
  };

  return (
    <div className="auth-container">
      <div className="website-name">
        ORBIT GUARDIANS
      </div>
      <div className="auth-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" required />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
};

export default Signup;
