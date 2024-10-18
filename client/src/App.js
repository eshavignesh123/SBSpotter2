//Put in coordinates for pictures
//Enable only SBStudents
//Profile Picture
//fix bug where user name is still there after signing out
//differentiate between levels within game
//check main entrance coords

import React, { useState, useEffect } from 'react';

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './page/Home';
import SignIn from './page/SignIn';
import SignUp from './page/SignUp';
import NavBar from './components/NavBar';
import Game from './page/Game';
import User from './page/User';
import GameStart from './page/GameStart';
import Leaderboard from './page/Leaderboard';
import SearchUser from './page/SearchUser';


function App() {
  const [loginData, setLoginData] = useState(null);
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    // Fetch data from Express API to check if user is authenticated
    fetch('http://localhost:5000/api/data', {
      credentials: 'include' // Send cookies along with the request
    })
      .then(response => response.json())
      .then(data => {
        setLoginData(data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, [loginData]); // Dependency array includes loginData

  const handleLogin = (data) => {
    setLoginData(data);
  }

  return (
    <Router>
      <NavBar loginData={loginData} currentPath={currentPath} />
      <Routes>
        <Route path="/" element={<Home loginData={loginData} handleLogin={handleLogin} />} />
        <Route path="/game" element={<Game loginData={loginData} />} />
        <Route path="/userprofile" element={<User loginData={loginData} />} />
        <Route path="/gamestart" element={<GameStart loginData={loginData} />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/searchuser" element={<SearchUser />} />
        {!loginData && (
          <Route path="/signin" element={<SignIn />} />
        )}
        {!loginData && (
          <Route path="/signup" element={<SignUp />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
