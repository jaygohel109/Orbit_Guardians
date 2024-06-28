import React, { useState } from 'react';
import styled from 'styled-components';
import { alienData } from './data';

const AlienInfoCards = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % alienData.length);
    };

    const prevCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + alienData.length) % alienData.length);
    };

    const { name, description, strengths, weaknesses, howToKill, escape, image } = alienData[currentIndex];

    return (
        <CardContainer>
            <ArrowButton onClick={prevCard}>&lt;</ArrowButton>
            <Card>
                <AlienImage src={image} alt={name} />
                <AlienInfo>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <ul>
                        <li><strong>Strengths:</strong> {strengths}</li>
                        <li><strong>Weaknesses:</strong> {weaknesses}</li>
                        <li><strong>How to Kill:</strong> {howToKill}</li>
                        <li><strong>Escape:</strong> {escape}</li>
                    </ul>
                </AlienInfo>
            </Card>
            <ArrowButton onClick={nextCard}>&gt;</ArrowButton>
        </CardContainer>
    );
};

export default AlienInfoCards;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 20px;
    box-sizing: border-box;
`;

const ArrowButton = styled.button`
    background: none;
    border: none;
    font-size: 1.5em;
    cursor: pointer;
    color: white;
    padding: 10px;
    &:hover {
        color: #333;
    }

    @media (max-width: 768px) {
        font-size: 1.2em;
    }
`;

const Card = styled.div`
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    overflow: hidden;
    width: 80%;
    max-width: 600px;
    text-align: center;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const AlienImage = styled.img`
    width: 100%;
    height: auto;
`;

const AlienInfo = styled.div`
    padding: 20px;
    h2 {
        margin: 0;
    }
    p {
        margin: 10px 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
        li {
            margin: 5px 0;
        }
    }
`;
