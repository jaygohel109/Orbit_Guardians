import React from 'react';
import { Content, Title, Description, Card, CardContent, ContactForm } from './HealthContentStyles';

const MedicalResources = () => {
    return (
        <Content>
            <Title>Medical Resources</Title>
            <Description>Explore a variety of medical resources to help you manage your health and well-being.</Description>
            <Card>
                <CardContent>
                    <h3>Resource 1</h3>
                    <p>This resource provides comprehensive information about managing chronic illnesses.</p>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <h3>Resource 2</h3>
                    <p>Access a wide range of mental health support and counseling services.</p>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <h3>Resource 3</h3>
                    <p>Find out more about preventive care and wellness programs in your area.</p>
                </CardContent>
            </Card>
            <ContactForm>
                <h3>Contact Us</h3>
                <textarea placeholder="Write your message here..."></textarea>
                <button type="submit">Send Message</button>
            </ContactForm>
        </Content>
    );
};

export default MedicalResources;
