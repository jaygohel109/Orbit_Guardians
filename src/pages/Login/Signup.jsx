import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../supabaseClient'; // Import the Supabase client
import './Auth.css';

const Signup = ({ onSignUp }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            const { data: { user }, error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) {
                setMessage('Signup failed: ' + error.message);
            } else {
                const { error: insertError } = await supabase
                    .from('users')
                    .insert({ id: user.id, email: user.email, created_at: new Date(), username });

                if (insertError) {
                    console.error('Error inserting user data:', insertError.message);
                } else {
                    setMessage('Signup successful! Please check your email to confirm your account.');
                    console.log('Signup successful, user ID:', user.id); // Debugging log
                    onSignUp(user.id); // Pass the user ID to the parent component
                    navigate('/verify-email'); // Redirect to a verification info page
                }
            }
        } else {
            setMessage('Passwords do not match');
        }
    };

    return (
        <div className="auth-container">
            <div className="website-name">Orbit Guardians</div>
            <div className="auth-box">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
                {message && <p>{message}</p>}
                <p>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
