import React, { useState, useEffect } from 'react';

function SearchUser() {
    const [searchData, setSearchData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/search')
            .then(response => response.json())
            .then(data => {
                setSearchData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [searchData]);

    // Assuming searchData is an array of objects and each object has a 'name' property
    return (
        <div className= "home-body">


            <div className="d-flex align-items-center  justify-content-center vh-100">
                <div className="d-flex flex-column align-items-center" style={{ maxWidth: '400px' }}>
                    <h1 style={{fontSize: "3.5rem", color: "#D5b608"}}>Search Results</h1>

                    

                    {!searchData ? (
                        
                        <h1>No User Exists</h1>
                    ):(
                        <>
                            <h1 style ={{color:"#D5b608"}}>{searchData.firstName} {searchData.lastName}</h1>
                            <p style ={{color:"white", fontSize:"20px", fontWeight: 600}}>Email: {searchData.email}</p>

                            {searchData.points === Number.MAX_VALUE ? (
                                <p style ={{color:"white", fontSize:"20px", fontWeight: 600}}>High Score: They have not played a game yet</p>
                            ):<p style ={{color:"white", fontSize:"20px", fontWeight: 600}}>High Score: {searchData.points}</p>
                            }
                        
                        </>
                        
                        
                    )}


                </div>


            </div>
        </div>
    );
}

export default SearchUser;
