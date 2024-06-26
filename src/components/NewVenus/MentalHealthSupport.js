import React from 'react';
import { Content, Title, Description } from './HealthContentStyles';

const MentalHealthSupport = () => {
    return (
        <Content>
            <Title>Mental Health Support</Title>
            <Description>
                Explore a variety of mental health resources including counseling services, support groups, and educational materials to help you manage stress and improve your mental well-being.
            </Description>
            <ul>
                <li>Article on managing stress</li>
                <li>Video on mindfulness</li>
                <li>Support group links</li>
            </ul>
        </Content>
    );
};

export default MentalHealthSupport;
