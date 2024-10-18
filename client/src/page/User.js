import React, { useState, useEffect } from 'react';
import "./User.css";

function User(props) {
    const { loginData } = props;

    const [recentData, setRecentData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/gamedata')
            .then(response => response.json())
            .then(data => {
                setRecentData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // Remove recentData from the dependency array to fetch data only once

    return (
        <>
            <div className="d-flex align-items-center justify-content-center vh-100 user-body">
                <div className="d-flex flex-column align-items-center " style={{ maxWidth: '400px' }}>

                    <div className = "d-flex flex-column align-items-center">
                        <h1 className = "" style ={{color:"#D5b608"}}>{loginData.firstName} {loginData.lastName}</h1>
                        <p className = "" style ={{color:"white", fontSize:"20px", fontWeight: 600}}>{loginData.email}</p>
                        {loginData.points === Number.MAX_VALUE ? (
                            <p  style ={{color:"white", fontSize:"20px", fontWeight: 600}}>High Score: You have not played a game yet</p>
                        ) : (
                            <p  style ={{color:"white", fontSize:"20px", fontWeight: 600}}>High Score: {loginData.points}</p>
                        )}
                        

                    </div>
                    
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Game Number</th>
                                <th scope="col">Date</th>
                                <th scope="col">Time</th>
                                <th scope="col">Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentData.slice(-3).map((player, index) => (
                                player.highestScore !== Number.MAX_VALUE && (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{player.date}</td>
                                        <td>{player.time}</td>
                                        <td>{player.score}</td>
                                    </tr>
                                )
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default User;
