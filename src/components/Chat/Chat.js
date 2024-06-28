import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { supabase } from '../../supabaseClient';

const ChatWrapper = styled.div`
    background: rgba(240, 240, 240, 0.185);
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
    font-family: 'Orbitron', sans-serif;
`;

const ChatMessages = styled.div`
    flex-grow: 1;
    overflow-y: auto;
    margin-bottom: 20px;
`;

const ChatMessage = styled.div`
    background: rgba(76, 151, 255, 0.4);
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
    border-radius: 20px;
    border: none;
    margin-right: 10px;
`;

const ChatButton = styled.button`
    width: 80px;  /* Fixed width for the button */
    padding: 10px;
    border: none;
    border-radius: 20px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    font-size: 1em;
    transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
  
    :hover {
        background-color: #0056b3;
        transform: scale(1.05);
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    }
`;

const Chat = ({ conversationId, currentUserId }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        fetchMessages();

        const messageSubscription = supabase
            .channel(`public:messages`)
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages', filter: `conversation_id=eq.${conversationId}` }, (payload) => {
                setMessages((currentMessages) => [...currentMessages, payload.new]);
            })
            .subscribe();

        return () => {
            supabase.removeChannel(messageSubscription);
        };
    }, [conversationId]);

    const fetchMessages = async () => {
        try {
            const { data, error } = await supabase
                .from('messages')
                .select('*')
                .eq('conversation_id', conversationId)
                .order('created_at', { ascending: true });

            if (error) throw error;

            setMessages(data);
        } catch (error) {
            console.error('Error fetching messages:', error.message);
        }
    };

    const handleSendMessage = async () => {
        if (newMessage.trim()) {
            try {
                const { error } = await supabase
                    .from('messages')
                    .insert([{ content: newMessage, sender_id: currentUserId, conversation_id: conversationId }]);

                if (error) throw error;

                setNewMessage('');
            } catch (error) {
                console.error('Error sending message:', error.message);
            }
        }
    };

    return (
        <ChatWrapper>
            <ChatHeader>Chat</ChatHeader>
            <ChatMessages>
                {messages.map((message, index) => (
                    <ChatMessage key={index}>
                        <ChatMessageSender>{message.sender_id}</ChatMessageSender>
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