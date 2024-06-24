// src/components/FeedbackForm/FeedbackForm.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Correct import for framer-motion
import { supabase } from '../../supabaseClient'; // Import the Supabase client
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error } = await supabase
            .from('feedback')
            .insert([{ name, email, message }]);

        if (error) {
            setStatus('Error submitting feedback');
        } else {
            setStatus('Feedback submitted successfully');
            setName('');
            setEmail('');
            setMessage('');
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="feedback-form-container">
            <h2>Feedback Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
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
                    <label>Message</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
                {status && <p>{status}</p>}
            </form>
        </motion.div>
    );
};

export default FeedbackForm;
