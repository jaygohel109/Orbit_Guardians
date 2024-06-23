import React, { useState } from 'react';
import styled from 'styled-components';
import MessengerList from './MessengerList';
import Chat from './Chat';

const ChatScreenWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 20px;
    width: 100%;
    height: 93vh;
    padding: 40px;
    box-sizing: border-box;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
    }
`;

const messengerItems = [
    {
        name: 'Juliett Doe',
        description: 'Concept: Aliquam vel nibh quis libero viverra...',
        image: 'https://via.placeholder.com/50',
    },
    {
        name: 'Clara Doe',
        description: 'Concept: Aliquam vel nibh quis libero viverra...',
        image: 'https://via.placeholder.com/50',
    },
    {
        name: 'John Smith',
        description: 'Concept: Aliquam vel nibh quis libero viverra...',
        image: 'https://via.placeholder.com/50',
    },
    {
        name: 'Anny Doe',
        description: 'Concept: Aliquam vel nibh quis libero viverra...',
        image: 'https://via.placeholder.com/50',
    },
];

const initialMessages = [
    { sender: 'Support', content: 'Hi, how can I help you?' },
    { sender: 'User', content: 'I need to find food around here' },
    { sender: 'Support', content: 'Sure, there is a food location which is 3 km from you' },
];

const ChatScreen = () => {
    const [messages, setMessages] = useState(initialMessages);

    const handleSendMessage = (newMessage) => {
        setMessages([...messages, { sender: 'User', content: newMessage }]);
    };

    return (
        <ChatScreenWrapper>
            <MessengerList items={messengerItems} />
            <Chat messages={messages} onSendMessage={handleSendMessage} />
        </ChatScreenWrapper>
    );
};

export default ChatScreen;
