import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./SignUp.css";
function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    

    const navigate = useNavigate();

    const postData = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ firstName, lastName, email, password, confirmPassword })
            });

            const responseData = await response.json();

            if (!response.ok) {
                throw new Error(responseData.message || 'Something went wrong');
            }

            navigate('/');
        } catch (error) {
            setError(error.message);
            console.error('Error posting data:', error);
        }
    };

    return (
        <div className="d-flex align-items-center vh-100 signup-body">
            <div className="container" style={{ maxWidth: '400px' }}>
                <form onSubmit={postData} className=" form-body">
                    <h1 className = "header">Sign Up</h1>
                    <p>Sign up with your school account!</p>
                    {error && <p className="text-danger">{error}</p>}
                    <div className="col-auto form-input">
                        <input className="form-control" type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)} placeholder="Type in your first name" required />
                    </div>
                    <br />
                    <div className="col-auto form-input">
                        <input className="form-control " type="text" name="lastName" onChange={(e) => setLastName(e.target.value)} placeholder="Type in your last name" required />
                    </div>
                    <br />
                    <div className="col-auto form-input">
                        <input className="form-control " type="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Type in your email" required />
                    </div>
                    <br />
                    <div className="col-auto form-input">
                        <input className="form-control " type="password" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Type in your password" required />
                    </div>
                    <br />
                    <div className="col-auto form-input">
                        <input className="form-control " type="password" name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm your password" required />
                    </div>
                    <br />
                    <div className="row g-3 align-items-center">
                        <div className="col-auto">
                            <button type="submit" className=" signup-button">Sign Up</button>
                        </div>
                        <div className="col-auto">
                            <Link to="/signin">Already have an account? Sign In</Link>
                        </div>
                    </div>
                </form>
                
            </div>
        </div>
    );
}

export default SignUp;
