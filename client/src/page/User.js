import React from 'react'

function User(props) {
    const { loginData } = props;
    
    return (
        <>
            <div className="d-flex align-items-center  justify-content-center vh-100">
                <div className="d-flex flex-column align-items-center" style={{ maxWidth: '400px' }}>

                
                    <h1>{loginData.firstName} {loginData.lastName}</h1>
                    <p>Email: {loginData.email}</p>

                    {loginData.points === Number.MAX_VALUE ? (
                        <p>High Score: You have not played a game yet</p>
                    ):<p>High Score: {loginData.points}</p>
                }
                </div>


            </div>

        </>
    )
}

export default User