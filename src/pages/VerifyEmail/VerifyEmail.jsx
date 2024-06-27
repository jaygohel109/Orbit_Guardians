import React from 'react';
import { Link } from 'react-router-dom';

const VerifyEmail = () => {
    return (
        <div className="auth-container">
            <div className="website-name">Orbit Guardians</div>
            <div className="auth-box">
                <h2>Email Verification</h2>
                <p>
                    A verification link has been sent to your email address. Please check your email and follow the instructions to verify your account.
                </p>
                <p>
                    Once your email is verified, you will be able to log in.
                </p>
                <p>
                    Already verified? <Link to="/login">Log in</Link>
                </p>
            </div>
        </div>
    );
};

export default VerifyEmail;

