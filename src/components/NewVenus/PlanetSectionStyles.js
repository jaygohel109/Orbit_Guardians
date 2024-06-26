import styled from 'styled-components';

export const Section = styled.section`
    padding: 0;
    background-color: transparent;
    display: flex;
    height: 100vh;
`;

export const Container = styled.div`
    display: flex;
    width: 100%;
`;

export const Sidebar = styled.div`
    width: 20%;
    background: linear-gradient(135deg, rgba(45, 86, 188, 0.8), rgba(50, 50, 50, 0.8));
    color: black;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 2px solid #007bff;
`;

export const Option = styled.div`
    width: 100%;
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 4px;
    text-align: center;
    font-family: 'Orbitron', sans-serif;
    cursor: pointer;
    background-color: white;
    transition: background-color 0.3s ease, transform 0.2s ease;
    &:hover {
        background-color: #555;
        transform: scale(1.05);
    }
`;

export const ContentContainer = styled.div`
    width: 80%;
    padding: 20px;
    overflow-y: auto;
`;
