import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../../components/Cards/Card';
import WarningCard from '../../components/Cards/WarningCard';
import ContactCard from '../../components/Cards/ContactCard';
import { hotNewsCards, warningCards, contactCardContent } from './data';

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
    width: 98%;
    height: 95vh;
    padding-left: 20px; /* Add padding on the left */

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto;
        padding-left: 0;
    }
`;

const RightColumn = styled.div`
    display: grid;
    grid-template-rows: 3fr 1fr;
    gap: 20px;
    height: 90%;
`;

const Mercury = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleButtonClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % hotNewsCards.length);
    };

    const currentNews = hotNewsCards[currentIndex];

    return (
        <GridWrapper>
            <Card
                title={currentNews.title}
                content={currentNews.content}
                buttonText={currentNews.buttonText}
                imageUrl={currentNews.imageUrl}
                onClick={handleButtonClick}
            />
            <RightColumn>
                <WarningCard title="Warning" bulletPoints={warningCards} />
                <ContactCard title="Contact Us" content={contactCardContent} />
            </RightColumn>
        </GridWrapper>
    );
};

export default Mercury;
