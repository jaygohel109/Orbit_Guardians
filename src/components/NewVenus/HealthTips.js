import React from 'react';
import { Content, Title } from './HealthContentStyles';

const HealthTips = () => {
    return (
        <Content>
            <Title>Tips for Staying Healthy</Title>
            <ul>
                <li>
                    <strong>Home Fitness Challenges:</strong> Launch a series of home fitness challenges that encourage citizens to stay active. Include workout plans, video tutorials, and progress tracking tools to keep participants motivated.
                </li>
                <li>
                    <strong>Healthy Eating Plans:</strong> Provide customizable healthy eating plans with recipes, grocery lists, and nutritional tips to help citizens maintain a balanced diet and boost their immune systems.
                </li>
                <li>
                    <strong>Sleep Improvement Programs:</strong> Develop sleep improvement programs that offer tips for creating a restful environment, relaxation techniques before bed, and strategies for dealing with sleep disturbances.
                </li>
                <li>
                    <strong>Stress-Relief Activities:</strong> Suggest a variety of stress-relief activities such as creative arts, gardening, and DIY projects. Include guides, materials lists, and instructional videos to help citizens engage in these activities.
                </li>
            </ul>
        </Content>
    );
};

export default HealthTips;
