import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'; // Ensure the CSS file is correctly named

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const postData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include' // Ensure cookies are included
      });

      const responseData = await response.json();

      if (!response.ok) {
        // Handle error from server
        setError(responseData.message || 'Sign-in failed');
      } else {
        // Clear any previous error message
        setError('');

        // Call handleLogin with the extracted data (if needed)
        // handleLogin(responseData);

        // Redirect to the home page
        navigate('/');
      }
    } catch (error) {
      console.error('Error posting data:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="d-flex align-items-center vh-100 signup-body">
      <div className="container" style={{ maxWidth: '400px' }}>
        <form onSubmit={postData} className="p-3 mb-2 bg-secondary-subtle text-secondary-emphasis form-body">
          <h1 className="header">Sign In</h1>
          <p>Sign in with your school account!</p>
          {error && <p className="text-danger">{error}</p>}

          <div className="col-auto form-input">
            <input className="form-control" type="email" name="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <br />
          <div className="col-auto form-input">
            <input className="form-control" type="password" name="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <br />
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <button type="submit" className="signup-button">Sign In</button>
            </div>
            <div className="col-auto">
              <Link to="/signup">Don't have an account? Sign Up</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
