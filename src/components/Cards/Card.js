import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
    background: rgba(0, 0, 0, 0.5); /* Translucent background */
    color: #fff; /* Hardcoded white color */
    border-radius: 12px;
    padding: 15px; /* Reduced padding */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 95%; /* Adjust width */
    height: 300px; /* Set fixed height */
    margin: 10px auto; /* Reduced margin */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const CardTitle = styled.h2`
    font-size: 1.2em; /* Reduced font size */
    margin-bottom: 15px; /* Reduced margin */
    text-align: center;
`;

const CardContent = styled.div`
    font-size: 1em;
    flex-grow: 1; /* Ensure it takes up available space */
    margin-top: 15px;
    margin-bottom: 15px; /* Reduced margin */
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const NewsText = styled.p`
    font-size: 1em; /* Reduced font size */
    font-weight: bold;
    text-align: center;
    margin: 10px 0;
`;

const CardImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin: 15px 0; /* Reduced margin */
`;

const CardButton = styled.button`
    background: #007bff; /* Hardcoded button color */
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 0.9em; /* Reduced font size */
    margin-top: 15px; /* Adjust margin */
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
