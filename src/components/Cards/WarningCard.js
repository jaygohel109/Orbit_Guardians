import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaExclamationTriangle } from 'react-icons/fa';

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`;

const blinkingWarning = keyframes`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const CardWrapper = styled.div`
    background: rgba(240, 240, 240, 0.185);
    color: #fff;
    border-radius: 15px;
    padding: 15px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(15px);
    width: 100%;
    max-width: 1200px;
    height: auto;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    animation: ${fadeIn} 1s ease-in-out;

    @media (max-width: 768px) {
        width: 90%;
    }
`;

const CardTitle = styled.h2`
    font-size: 2.0em;
    margin-bottom: 15px;
    text-align: center;
    font-family: 'Orbitron', sans-serif;
`;

const CardContent = styled.div`
    font-size: 1em;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ListItem = styled.li`
    animation: ${blinkingWarning} 1s infinite;
    list-style: none;
    text-align: center;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.2em;
`;

const WarningCard = ({ title, bulletPoints }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % bulletPoints.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [bulletPoints.length]);

    return (
        <CardWrapper>
            <CardTitle>{title}</CardTitle>
            <CardContent>
                <ul>
                    <ListItem>
                        <FaExclamationTriangle size={30} color="#ffcc00" />
                        {bulletPoints[currentIndex]}
                    </ListItem>
                </ul>
            </CardContent>
        </CardWrapper>
    );
};

export default WarningCard;
