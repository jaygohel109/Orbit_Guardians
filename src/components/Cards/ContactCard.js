import React from 'react';
import styled, { keyframes } from 'styled-components';

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
    justify-content: center;
    align-items: center;
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

const CardContent = styled.p`
    font-size: 1em;
    text-align: center;
    margin: 0; /* Remove default margin */
`;

const ContactCard = ({ title, content }) => {
    return (
        <CardWrapper>
            <CardTitle>{title}</CardTitle>
            <CardContent>{content}</CardContent>
        </CardWrapper>
    );
};

export default ContactCard;
