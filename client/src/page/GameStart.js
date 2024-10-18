import React from 'react'
import { Link } from 'react-router-dom';
import './GameStart.css';

function GameStart() {
  return (
    <>
        <div className="d-flex flex-column align-items-center  justify-content-center vh-100 start-body">
            <h1 className = "title">Game Start</h1>
            <p className = "desc">You are about to start SBSpotter. Heres how you play:</p>
            <div class="d-flex flex-column justify-content-between rules-container">
                  <p className = "rules-text">You will be shown a picture of somewhere in the school.</p>
                  <p className = "rules-text">Click on the map to make your guess as to where the location could be.</p>
                  <p className = "rules-text">There are six rounds. For each round, you will have 30 seconds to make your guess.</p>
                  <p className = "rules-text">Click on the numbers on the bottom left to change the floor.</p>
                  <p className = "rules-text">Click on the submit button to submit your guess.</p>
                  <p className = "rules-text">Points will be given based on how close you are to the actual location.</p>
                  <Link to="/game"  className = "start-button">            
                    Click to begin!

                
                  </Link>


            </div>
           
            

            




        </div>

        
    </>
  )
}

export default GameStart