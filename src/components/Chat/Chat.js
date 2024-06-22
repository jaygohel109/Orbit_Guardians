import React, { useState } from 'react';
import styled from 'styled-components';

const ChatWrapper = styled.div`
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
    justify-content: space-between;
`;

const ChatHeader = styled.div`
    font-size: 1.5em;
    text-align: center;
    margin-bottom: 20px;
`;

const ChatMessages = styled.div`
    flex-grow: 1;
    overflow-y: auto;
    margin-bottom: 20px;
`;

const ChatMessage = styled.div`
    background: rgba(255, 255, 255, 0.1);
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
`;

const ChatMessageSender = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`;

const ChatMessageContent = styled.div`
    font-size: 1em;
`;

const ChatInputWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const ChatInput = styled.input`
    flex-grow: 1;
    padding: 10px;
    border-radius: 6px;
    border: none;
    margin-right: 10px;
`;

const ChatButton = styled.button`
    background: #007bff;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1em;
`;

const Chat = ({ messages, onSendMessage }) => {
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            onSendMessage(newMessage);
            setNewMessage('');
        }
    };

    return (
        <ChatWrapper>
            <ChatHeader>Chat</ChatHeader>
            <ChatMessages>
                {messages.map((message, index) => (
                    <ChatMessage key={index}>
                        <ChatMessageSender>{message.sender}</ChatMessageSender>
                        <ChatMessageContent>{message.content}</ChatMessageContent>
                    </ChatMessage>
                ))}
            </ChatMessages>
            <ChatInputWrapper>
                <ChatInput
                    type="text"
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <ChatButton onClick={handleSendMessage}>Send</ChatButton>
            </ChatInputWrapper>
        </ChatWrapper>
    );
};

export default Chat;
