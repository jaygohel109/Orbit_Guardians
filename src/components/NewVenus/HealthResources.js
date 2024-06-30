import React from 'react';
import { Container, Section, Title, Description, Card, CardContent, ContactForm } from './HealthResourcesStyles';

const HealthResources = () => {
    return (
        <Section>
            <Container>
                <Title>Venus - Health and Well-being</Title>
                <Description>
                    At Venus, we are committed to promoting the mental and physical well-being of our community members. Explore our resources designed to support your health journey.
                </Description>
                <div>
                    <Title>Access to Medical Resources</Title>
                    <Card>
                        <CardContent>
                            <h3>Alien-Specific Medical Protocols:</h3>
                            <p>Develop detailed protocols for treating injuries and illnesses caused by alien encounters. Include guidelines for first aid, symptoms to watch for, and steps for seeking professional medical help.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <h3>Virtual Health Clinics:</h3>
                            <p>Set up virtual health clinics where citizens can schedule appointments with healthcare professionals, receive diagnoses, and get prescriptions without leaving their homes.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <h3>Medical Supply Tracker:</h3>
                            <p>Create an online tracker for medical supplies, allowing citizens to check the availability of essential items like first aid kits, medicines, and protective gear at local pharmacies and health centers.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <h3>Health Education Webinars:</h3>
                            <p>Host regular webinars with healthcare professionals discussing topics such as preventing alien-related injuries, maintaining hygiene, and managing chronic conditions during the crisis.</p>
                        </CardContent>
                    </Card>
                </div>
            </Container>
        </Section>
    );
};

export default HealthResources;
