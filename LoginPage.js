import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import './LoginPage.css';

const LoginPage = ({ onGoogleLogin }) => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Add authentication logic for normal email/password login here
    // If login is successful:
    navigate('/home');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <h1>FastFit! Fitness Tracker</h1>
      <h2>Login:</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required /><br />
        <button type="submit">Login</button><br />
        <button type="button" onClick={handleSignUp}>New User? Sign Up with Google</button><br /><br />
        
        {/* Google login button */}
        <button type="button" className="google-login-button" onClick={onGoogleLogin}>
          Login with Google
        </button>
      </form>
    </div>
  );
};

export default LoginPage;


