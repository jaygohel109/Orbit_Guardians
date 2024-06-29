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
    justify-content: space-between;
    text-align: center;
    animation: ${fadeIn} 1s ease-in-out;
    overflow: hidden;

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
    margin-top: 15px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const NewsText = styled.p`
    font-size: 1em;
    font-weight: regular;
    text-align: center;
    margin: 10px 0;
`;

const CardImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin: 15px 0;
`;

const CardButton = styled.button`
    background: #007bff;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 0.9em;
    margin-top: 15px;
`;

const Card = ({ title, content, buttonText, imageUrl, onClick }) => {
    return (
        <CardWrapper>
            <CardTitle>{title}</CardTitle>
            <CardContent>
                <NewsText>{content}</NewsText>
                <CardImage src={imageUrl} alt="News related image" />
                <CardButton onClick={onClick}>{buttonText}</CardButton>
            </CardContent>
        </CardWrapper>
    );
};

export default Card;
