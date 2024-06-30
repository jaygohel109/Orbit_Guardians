import React, { useState } from 'react';
import styled from 'styled-components';
import { Content, Title, ContactForm } from './HealthContentStyles';

const HealthProfessionals = () => {
    const [message, setMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = () => {
        if (message.trim()) {
            setShowPopup(true);
            setMessage('');
        }
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <Content>
            <Title>Health Professional Info</Title>
            <ul>
                <li>Dr. Jane Doe - Nutritionist - contact@jane.com</li>
                <li>Dr. John Smith - Psychologist - contact@john.com</li>
            </ul>
            <ContactForm>
                <textarea
                    placeholder="Your Message"
                    rows={4}
                    value={message}
                    onChange={handleMessageChange}
                />
                <button onClick={handleSubmit}>Send Message</button>
            </ContactForm>
            {showPopup && (
                <Popup>
                    <PopupContent>
                        <p>We received your message, we will contact you soon.</p>
                        <CloseButton onClick={handleClosePopup}>Close</CloseButton>
                    </PopupContent>
                </Popup>
            )}
        </Content>
    );
};

const Popup = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
`;

const PopupContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    position: relative;
    width: 300px;
`;

const CloseButton = styled.button`
    margin-top: 20px;
    background: none;
    border: none;
    font-size: 0.8em; /* Smaller font size */
    cursor: pointer;
    color: black;
    padding: 5px 10px;
    border-radius: 5px;
`;

export default HealthProfessionals;
