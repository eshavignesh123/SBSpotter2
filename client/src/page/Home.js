import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home({ handleLogin }) {
  const [loginData, setLoginData] = useState(null);

  useEffect(() => {
    // Fetch data from Express API
    fetch('http://localhost:5000/api/data')
      .then(response => response.json())
      .then(data => {
        setLoginData(data);
        handleLogin(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1>SBSpotter</h1>
      
      {/* Render data if available */}
      {loginData ? (
        <div className="d-flex flex-column align-items-center w-100">
          <p>Welcome {loginData.firstName} {loginData.lastName}!</p>
          <div className="d-flex flex-row justify-content-between" style={{ width: "35%" }}>
            <Link to="/gamestart" className="btn btn-info">Start Game</Link>
            <Link to="/userprofile" className="btn btn-info">User Profile</Link>
            <Link to="/leaderboard" className="btn btn-info">Leaderboard</Link>
          </div>
        </div>
      ): (
        <div>
          <h4>Learn your way around SBHS!</h4>

          <div className="d-flex flex-column align-items-center">
            <Link to="/signup" className="btn btn-info">Play a Game</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
