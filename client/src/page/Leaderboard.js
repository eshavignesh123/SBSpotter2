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
        <div>
            <h1>Leaderboard</h1>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Rank</th>
                        <th scope="col">Name</th>
                        <th scope="col">Score</th>
                    </tr>
                </thead>
                <tbody>
                {leaderboardData.map((player, index) => (
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
