import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
    background: rgba(0, 0, 0, 0.5); /* Translucent background */
    color: #fff; /* Hardcoded white color */
    border-radius: 12px;
    padding: 0px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%; /* Adjust width */
    height: 100%; /* Adjust height */
    margin: 20px auto; /* Add margin */
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const CardTitle = styled.h2`
    font-size: 1.5em;
    text-align: center;
    margin-bottom: 20px;
    
`;

const CardContent = styled.p`
    font-size: 1em;
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
