// src/pages/Neptune/Neptune.js
import React from 'react';
import { motion } from 'framer-motion';
import FeedbackForm from '../../components/FeedbackForm/FeedbackForm';
import './Neptune.css'; // Ensure you have necessary styles for the Neptune page

const Neptune = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="neptune-page">
            <FeedbackForm />
        </motion.div>
    );
};

export default Neptune;
