import React from 'react'
import { Link } from 'react-router-dom';

function GameStart() {
  return (
    <>
        <div className="d-flex flex-column align-items-center  justify-content-center vh-100">
            <h1>Game Start</h1>
            <p>You are about to start SBSpotter. Heres how you play:</p>
            <ul>
                <li>You will be shown a picture of somewhere in the school.</li>
                <li>Click on the map to make your guess as to where the location could be.</li>
                <li>There are six rounds. For each round, you will have 30 seconds to make your guess.</li>
                <li>Click on the numbers on the bottom left to change the floor.</li>
                <li>Click on the submit button to submit your guess.</li>
                <li>Points will be given based on how close you are to the actual location.</li>

            </ul>
            <p>Good luck!</p>

            <Link to="/game" className="nav-link">'            
                <button href = "/game">Click to begin!</button>
'
                
            </Link>




        </div>

        
    </>
  )
}

export default GameStart