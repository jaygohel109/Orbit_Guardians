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
                            <h3>Medical Resource 1</h3>
                            <p>Short description of the resource.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <h3>Medical Resource 2</h3>
                            <p>Short description of the resource.</p>
                        </CardContent>
                    </Card>
                </div>
            </Container>
        </Section>
    );
};

export default HealthResources;
