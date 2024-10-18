import React, { useState, useEffect } from 'react';

function Leaderboard() {
    const [leaderboardData, setLeaderboardData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/leaderboard')
            .then(response => response.json())
            .then(data => {
                setLeaderboardData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 home-body">
            <h1 className = "title">Leaderboard</h1>
            <p  style = {{marginBottom:"30px", fontSize: "20px", color: "white" , fontWeight: "400"}}>Score is calculated by how far away you were from the actual location, so the less points you have, the better you did!</p>
            <table className="table table-striped" style = {{width: "50%"}}>
                <thead>
                    <tr>
                        <th scope="col">Rank</th>
                        <th scope="col">Name</th>
                        <th scope="col">Score</th>
                    </tr>
                </thead>
                <tbody>
                {leaderboardData.slice(0, 5).map((player, index) => (
                    player.highestScore !== Number.MAX_VALUE && (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{player.firstName} {player.lastName}</td>
                            <td>{player.highestScore}</td>
                        </tr>
                    )
                ))}

                </tbody>
            </table>
        </div>
    );
}

export default Leaderboard;
