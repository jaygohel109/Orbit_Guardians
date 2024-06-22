import React, { useState } from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
    background: rgba(0, 0, 0, 0.5); /* Translucent background */
    color: #fff; /* Hardcoded white color */
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%; /* Adjust width */
    height: 100%; /* Adjust height */
    margin: 20px auto; /* Add margin */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const CardTitle = styled.h2`
    font-size: 1.5em;
    margin-bottom: 20px; /* Add margin between heading and content */
    text-align: center;
`;

const CardContent = styled.div`
    font-size: 1em;
    overflow-y: auto;
    flex-grow: 1; /* Ensure it takes up available space */
    padding-right: 10px; /* For scrollbar space */
    margin-top: 20px;
    margin-bottom: 20px; /* Add margin to push content above button */
`;

const CardButton = styled.button`
    background: #007bff; /* Hardcoded button color */
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1em;
`;

const WarningCard = ({ title, bulletPoints }) => {
    const [showMore, setShowMore] = useState(false);

    const handleToggle = () => {
        setShowMore(!showMore);
    };

    return (
        <CardWrapper>
            <CardTitle>{title}</CardTitle>
            <CardContent style={{ maxHeight: showMore ? 'none' : '500px' }}>
                <ul>
                    {bulletPoints.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </CardContent>
            {/* <CardButton onClick={handleToggle}>
                {showMore ? 'Show less' : 'Read more'}
            </CardButton> */}
        </CardWrapper>
    );
};

export default WarningCard;
