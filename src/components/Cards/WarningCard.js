import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaExclamationTriangle } from 'react-icons/fa';

const CardWrapper = styled.div`
    background: rgba(0, 0, 0, 0.5); /* Translucent background */
    color: #fff;
    border-radius: 15px;
    padding: 15px; /* Reduced padding */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 95%; /* Adjust width */
    height: 500px; /* Set fixed height */
    margin: 10px auto; /* Reduced margin */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'Arial', sans-serif;
`;

const CardTitle = styled.h2`
    font-size: 1.2em; /* Reduced font size */
    margin-bottom: 15px; /* Reduced margin */
    text-align: center;
`;

const CardContent = styled.div`
    font-size: 1em; /* Reduced font size */
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(20px);
    }
`;

const ListItem = styled.li`
    animation: ${({ fade }) => (fade === 'in' ? fadeIn : fadeOut)} 1s ease-in-out forwards;
    list-style: none;
    text-align: center;
    opacity: 0;
    display: flex;
    align-items: center;
    gap: 10px;
`;

const WarningCard = ({ title, bulletPoints }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState('in');

    useEffect(() => {
        const interval = setInterval(() => {
            setFade('out');
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % bulletPoints.length);
                setFade('in');
            }, 1000); // Match this timeout with the fadeOut animation duration
        }, 5000); // Duration each message is shown

        return () => clearInterval(interval);
    }, [bulletPoints.length]);

    return (
        <CardWrapper>
            <CardTitle>{title}</CardTitle>
            <CardContent>
                <ul>
                    <ListItem fade={fade}>
                        <FaExclamationTriangle size={24} color="#ffcc00" />
                        {bulletPoints[currentIndex]}
                    </ListItem>
                </ul>
            </CardContent>
        </CardWrapper>
    );
};

export default WarningCard;
