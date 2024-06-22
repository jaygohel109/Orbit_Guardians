import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
    background: rgba(0, 0, 0, 0.5); /* Translucent background */
    color: #fff;
    border-radius: 15px;
    padding: 25px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    width: 90%;
    max-width: 800px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'Arial', sans-serif;
`;

const CardTitle = styled.h2`
    font-size: 2em;
    margin-bottom: 20px;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
`;

const CardContent = styled.p`
    font-size: 1.2em;
    text-align: center;
    margin-bottom: 30px;
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
