import React from 'react';
import styled from 'styled-components';
import SectionCardSlider from '../../components/Cards/SectionCardSlider';
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
    return (
        <GridWrapper>
            <SectionCardSlider cards={hotNewsCards} />
            <RightColumn>
                <WarningCard title="Warning" bulletPoints={warningCards} />
                <ContactCard title="Contact Us" content={contactCardContent} />
            </RightColumn>
        </GridWrapper>
    );
};

export default Mercury;
