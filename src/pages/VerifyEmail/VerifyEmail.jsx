// src/pages/VerifyEmail/VerifyEmail.jsx
import React, { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient'; // Import the Supabase client
import '../Login/Auth.css';

const VerifyEmail = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const handleEmailVerification = async () => {
            const { data, error } = await supabase.auth.update({ email_confirm: true });

            if (error) {
                setMessage('Email verification failed: ' + error.message);
            } else {
                setMessage('Email verified successfully! You can now log in.');
            }
        };

        handleEmailVerification();
    }, []);

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Email Verification</h2>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default VerifyEmail;
