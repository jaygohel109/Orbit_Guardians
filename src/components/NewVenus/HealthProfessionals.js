import React from 'react';
import { Content, Title, Description, ContactForm } from './HealthContentStyles';

const HealthProfessionals = () => {
    return (
        <Content>
            <Title>Health Professional Info</Title>
            <ul>
                <li>Dr. Jane Doe - Nutritionist - contact@jane.com</li>
                <li>Dr. John Smith - Psychologist - contact@john.com</li>
            </ul>
            <ContactForm>
                <textarea placeholder="Your Message" rows={4} />
                <button>Send Message</button>
            </ContactForm>
        </Content>
    );
};

export default HealthProfessionals;
