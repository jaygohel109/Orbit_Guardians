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
                <li>
                    <strong>Daily Mindfulness Practices:</strong> Offer a daily mindfulness practice guide, including short meditation sessions, breathing exercises, and visualization techniques to help reduce stress and anxiety.
                </li>
                <li>
                    <strong>Virtual Counseling Sessions:</strong> Provide access to virtual counseling sessions with licensed therapists and counselors, allowing citizens to discuss their mental health concerns confidentially and receive professional support.
                </li>
                <li>
                    <strong>Support Group Meetings:</strong> Organize online support group meetings where individuals can share their experiences, offer mutual support, and participate in guided discussions led by mental health professionals.
                </li>
                <li>
                    <strong>Mental Health Resource Library:</strong> Create an extensive online library of mental health resources, including articles, e-books, videos, and self-help tools focused on managing stress, anxiety, and depression during the invasion.
                </li>
            </ul>
        </Content>
    );
};

export default MentalHealthSupport;
