import React from 'react';
import AlienInfoCards from './AlienInfoCards';
import styled from 'styled-components';

const Earth = () => {
    return (
        <Container>
            <Banner>
                <h1>Welcome to Alien Info Hub</h1>
                <p>Discover the various types of aliens, their strengths, weaknesses, and how to deal with them. Stay prepared and informed!</p>
            </Banner>
            <Content>
                <AlienInfoCards />
            </Content>
        </Container>
    );
};

export default Earth;

const Container = styled.div`
    background-color: linear-gradient(135deg, rgba(45, 86, 188, 0.8), rgba(50, 50, 50, 0.8));
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    color: white;
`;

const Banner = styled.div`
    width: 100%;
    text-align: center;
    padding: 20px;
    background: linear-gradient(135deg, rgba(45, 86, 188, 0.8), rgba(50, 50, 50, 0.8));
    border-radius: 10px;
    font-family: 'Orbitron', sans-serif;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    h1 {
        margin: 0;
        font-size: 2.5em;
    }

    p {
        margin: 10px 0 0;
        font-size: 1.2em;
    }

    @media (max-width: 768px) {
        padding: 15px;
        h1 {
            font-size: 2em;
        }

        p {
            font-size: 1em;
        }
    }
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 20px;
`;
