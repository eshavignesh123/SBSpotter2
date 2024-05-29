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
        <div>

            <h1>Search Results</h1>

            <div className="d-flex align-items-center  justify-content-center vh-100">
                <div className="d-flex flex-column align-items-center" style={{ maxWidth: '400px' }}>

                    

                    {searchData.firstName === 'User Not Found' ? (
                        
                        <h1>No User Exists</h1>
                    ):(
                        <>
                            <h1>{searchData.firstName} {searchData.lastName}</h1>
                            <p>Email: {searchData.email}</p>

                            {searchData.points === Number.MAX_VALUE ? (
                                <p>High Score: They have not played a game yet</p>
                            ):<p>High Score: {searchData.points}</p>
                            }
                        
                        </>
                        
                        
                    )}


                </div>


            </div>
        </div>
    );
}

export default SearchUser;
