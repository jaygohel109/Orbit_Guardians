import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Section = styled.section`
    padding: 20px;
    background: rgba(240, 240, 240, 0.185);
`;

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background: rgba(240, 240, 240, 0.185);
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    animation: ${fadeIn} 1s ease-out;
`;

export const Title = styled.h2`
    font-size: 2em;
    font-family: 'Orbitron', sans-serif;
    margin-bottom: 20px;
    color: white;
    text-align: center;
    animation: ${fadeIn} 1.2s ease-out;
`;

export const Description = styled.p`
    font-size: 1.2em;
    margin-bottom: 20px;
    color: white;
    text-align: center;
    animation: ${fadeIn} 1.4s ease-out;
`;

export const Card = styled.div`
    background: #e0f7fa;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    margin-bottom: 20px;
    animation: ${fadeIn} 1.6s ease-out;
`;

export const CardContent = styled.div`
    padding: 20px;
    h3 {
        margin-top: 0;
        color: #00796b;
    }
    p {
        color: #004d40;
    }
`;

export const ContactForm = styled.div`
    display: flex;
    flex-direction: column;
    background: #f9f9f9;
    padding: 20px;
    text-align: center;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    margin-top: 20px;
    animation: ${fadeIn} 1.8s ease-out;
    textarea {
        width: 100%;
        padding: 15px;
        margin-bottom: 15px;
        border-radius: 6px;
        border: 1px solid #ccc;
        font-size: 1em;
    }
    button {
        padding: 12px 20px;
        border: none;
        border-radius: 6px;
        background-color: #007bff;
        color: white;
        font-size: 1em;
        cursor: pointer;
        transition: background-color 0.3s ease;
        &:hover {
            background-color: #0056b3;
        }
    }
`;
