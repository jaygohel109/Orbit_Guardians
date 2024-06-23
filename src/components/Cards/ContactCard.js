import React from 'react';
import styled , {keyframes}from 'styled-components';


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
    color: #fff;
    width: 95%; /* Adjust width */
    height: auto; /* Remove fixed height */
    margin: 20px auto; /* Reduced margin */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'Arial', sans-serif;
    background: rgba(240, 240, 240, 0.185);
    padding: 3rem;
    border-radius: 15px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(15px);
    text-align: center;
    animation: fadeIn 1s ease-in-out;
`;

const CardTitle = styled.h2`
    font-size: 2.0em; /* Reduced font size */
    margin-bottom: 15px; /* Reduced margin */
    text-align: center;
    font-family: 'Orbitron', sans-serif; /* Apply Orbitron font */
`;

const CardContent = styled.p`
    font-size: 1em; /* Reduced font size */
    text-align: center;
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
