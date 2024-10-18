import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

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
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 home-body">
      
      {/* Render data if available */}
      {loginData ? (
        <div className="d-flex flex-column align-items-center">
          <h1 className="title">SBSpotter</h1>

          <p className="welcome-desc">Welcome {loginData.firstName} {loginData.lastName}!</p>
          <div className="d-flex flex-row justify-content-between" style = {{width: "80%"}}> 
            <Link to="/gamestart" className="click-button"><b>Start Game</b></Link>
            <Link to="/userprofile" className="click-button"><b>User Profile</b></Link>
            <Link to="/leaderboard" className="click-button"><b>Leaderboard</b></Link>
          </div>
        </div>
      ): (

        <div className="d-flex flex-row justify-content-between align-items-center" style={{width:"80%"}}>
          <div className="d-flex flex-column justify-content-left">
            <h1 className="title">SBSpotter</h1>
            <h4 className="desc">Learn your way around SBHS!</h4>

            <div>
              <Link to="/signup"><button className="buttonSign">Play a Game</button></Link>
            </div>
          </div>
          <img src="/webIcon.png" alt="SBHS" style={{ width: '30%', height: '100%' }} />
        </div>
      )}
    </div>
  );
}

export default Home;
