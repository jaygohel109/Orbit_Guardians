import React from 'react';
import { Content, Title, Description } from './HealthContentStyles';

const HealthTips = () => {
    return (
        <Content>
            <Title>Tips for Staying Healthy</Title>
            <ul>
                <li>Nutrition tips</li>
                <li>Exercise routines</li>
                <li>Sleep hygiene advice</li>
                <li>Stress management techniques</li>
            </ul>
        </Content>
    );
};

export default HealthTips;
