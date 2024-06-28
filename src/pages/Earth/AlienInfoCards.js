import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { alienData } from './data';

const AlienInfoCards = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const setCard = (index) => {
        setCurrentIndex(index);
    };

    const { name, description, strengths, weaknesses, howToKill, escape, image } = alienData[currentIndex];

    return (
        <CardContainer>
            <Card>
                <AlienImage src={image} alt={name} />
                <AlienInfo>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <ul>
                        <li><strong>Strengths:</strong>{strengths}</li>
                        <li><strong>Weaknesses:</strong> {weaknesses}</li>
                        <li><strong>How to Kill:</strong> {howToKill}</li>
                        <li><strong>Escape:</strong> {escape}</li>
                    </ul>
                </AlienInfo>
            </Card>
            <ThumbnailContainer>
                {alienData.map((alien, index) => (
                    <Thumbnail
                        key={index}
                        src={alien.image}
                        alt={alien.name}
                        active={index === currentIndex}
                        onClick={() => setCard(index)}
                    />
                ))}
            </ThumbnailContainer>
        </CardContainer>
    );
};

export default AlienInfoCards;

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

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-family: 'Orbitron', sans-serif;
    padding: 0 20px;
    box-sizing: border-box;
`;

const Card = styled.div`
    background: linear-gradient(145deg, #f0f4f8, #d9e2ec);
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    overflow: hidden;
    width: 60%;
    max-width: 600px;
    text-align: left;
    animation: ${fadeIn} 0.5s ease-out;
    transition: transform 0.3s ease-in-out;
    margin-bottom: 20px;

    &:hover {
        transform: scale(1.05);
    }

    @media (max-width: 768px) {
        width: 90%;
    }
`;

const AlienImage = styled.img`
    width: 100%;
    height: auto;
    border-bottom: 2px solid #61dafb;
`;

const AlienInfo = styled.div`
    padding: 20px;
    background: #fff;

    h2 {
        margin: 0;
        color: #333;
        text-align: center;
    }

    p {
        margin: 10px 0;
        color: #555;
        text-align: center;
    }

    ul {
        list-style-type: none;
        padding: 0;

        li {
            margin: 5px 0;
            color: #444;
            text-align: center;

            strong {
                color: #333;
            }
        }
    }
`;

const ThumbnailContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    flex-wrap: wrap;
`;


const Thumbnail = styled.img`
    width: 60px;
    height: 60px;
    margin: 0 10px;
    border: 2px solid ${props => props.active ? '#61dafb' : '#ccc'};
    border-radius: 10px;
    cursor: pointer;
    transition: border-color 0.3s ease;

    &:hover {
        border-color: #21a1f1;
    }
`;
