import React from 'react';
import styled from 'styled-components';

const MessengerWrapper = styled.div`
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
`;

const MessengerTitle = styled.h2`
    font-size: 1.5em;
    text-align: center;
    margin-bottom: 20px;
`;

const MessengerItem = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
        background: rgba(255, 255, 255, 0.2);
    }
`;

const MessengerItemImage = styled.img`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-right: 10px;
`;

const MessengerItemContent = styled.div`
    display: flex;
    flex-direction: column;
`;

const MessengerItemName = styled.span`
    font-size: 1.2em;
`;

const MessengerItemDescription = styled.span`
    font-size: 0.9em;
`;

const MessengerList = ({ items }) => {
    return (
        <MessengerWrapper>
            <MessengerTitle>Messenger</MessengerTitle>
            {items.map((item, index) => (
                <MessengerItem key={index}>
                    <MessengerItemImage src={item.image} alt={item.name} />
                    <MessengerItemContent>
                        <MessengerItemName>{item.name}</MessengerItemName>
                        <MessengerItemDescription>{item.description}</MessengerItemDescription>
                    </MessengerItemContent>
                </MessengerItem>
            ))}
        </MessengerWrapper>
    );
};

export default MessengerList;
