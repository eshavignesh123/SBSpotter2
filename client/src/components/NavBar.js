import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function NavBar({ loginData }) {
    const location = useLocation();

    const navigate = useNavigate();

    const [usersearch, setUsersearch] = useState('');
    // Define the specific URL where you don't want to render the NavBar
    const specificUrl = '/game';

    // Check if the current URL matches the specific URL where you don't want to render the NavBar
    const shouldRenderNavBar = location.pathname !== specificUrl;
    const handleSignOut = async () => {
        try {
            const response = await fetch('http://localhost:5000/signout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include' // Ensure cookies are sent with the request
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Assuming the response contains a message indicating successful logout
            const responseData = await response.json();
            console.log(responseData.message);

            

            navigate('/');

        } catch (error) {
            console.error('Error signing out:', error);
        }
    };
    
    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include', // Ensure cookies are sent with the request
                body: JSON.stringify({ usersearch: usersearch}),

            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Assuming the response contains a message indicating successful logout
            const responseData = await response.json();
            console.log(responseData.message);

            navigate('/searchuser');
            


        } catch (error) {
            console.error('Error signing out:', error);
        }
    };
            


    return shouldRenderNavBar ? (
        <nav className="navbar navbar-expand-lg " style = {{backgroundColor: "#e3f2fd"}}>
            <div className="container-fluid">
                {loginData && (
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
                        <li className="nav-item">
                            <Link to="/userprofile" className="nav-link">
                                <img src="/person-icon.png" alt="User Avatar" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/userprofile" className="nav-link">{loginData.firstName} {loginData.lastName}</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/searchuser">
                                <button onClick={handleSignOut} className="btn btn-light">Sign Out</button>

                            </Link>
                        </li>
                    </ul>
                )}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        {!loginData ? (
                            <>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/signin" className="nav-link">Sign In</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/gamestart" className="nav-link">Game</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/leaderboard" className="nav-link">Leaderboard</Link>
                                </li>
                                
                                <form class="d-flex" role="search">
                                    <div className="col-auto" style={{marginRight:"10px"}}>
                                        <input className="form-control" type="search" name="usersearch"  placeholder="Search" aria-label="Search" onChange={(e) => setUsersearch(e.target.value)} />
                                    </div>
                                    <button onClick = {handleSearch} class="btn btn-outline-success" type="submit" style={{marginRight:"10px"}}>Search User by Email</button>
                                </form>
                                
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    ) : null;
}

export default NavBar;
