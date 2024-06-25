import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../../supabaseClient';
import './FeedbackForm.css';

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
            <h2 className='title'>FEEDBACK FORM</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="Enter your name"
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Enter your email"
                    />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        placeholder="Enter your message"
                    />
                </div>
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit">
                    Submit
                </motion.button>
                {status && <motion.p className="status-message" animate={{ opacity: [0, 1, 0], transition: { duration: 2 } }}>{status}</motion.p>}
            </form>
        </motion.div>
    );
};

export default FeedbackForm;
