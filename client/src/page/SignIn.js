import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignIn() {
  const [responseMessage, setResponseMessage] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const postData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Assuming the response contains user data, extract it
      const responseData = await response.json();

      // Call handleLogin with the extracted data

      // Redirect to the home page
      navigate('/');
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <div className="d-flex align-items-center vh-100">
      <div className="container" style={{ maxWidth: '400px' }}>
        <form onSubmit={postData} className="p-3 mb-2 bg-secondary-subtle text-secondary-emphasis">
          <h1>Sign In</h1>
          <p>Sign in with your school account!</p>
          <div className="col-auto">
            <input className="form-control" type="email" name="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <br />
          <div className="col-auto">
            <input className="form-control" type="password" name="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <br />
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">Sign In</button>
            </div>
            <div className="col-auto">
              <Link to="/signup" className="btn btn-link">Don't have an account? Sign Up</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
