import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';

const SliderWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%; /* Ensure it takes up available space */
`;

const SectionCardSlider = ({ cards }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    return (
        <SliderWrapper>
            <CardContainer>
                <Card
                    key={currentIndex}
                    title={cards[currentIndex].title}
                    content={cards[currentIndex].content}
                    buttonText={cards[currentIndex].buttonText}
                    onClick={handleNext}
                />
            </CardContainer>
        </SliderWrapper>
    );
};

export default SectionCardSlider;
