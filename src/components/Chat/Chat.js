import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { supabase } from '../../supabaseClient';

const ChatWrapper = styled.div`
    background: rgba(240, 240, 240, 0.185);
    color: #fff;
    border-radius: 12px;
    padding: 20px;
    padding-bottom: 40px; /* Add padding at the bottom */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: auto; /* Add this to enable scrolling */
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

const Chat = ({ conversationId, currentUserId, selectedUser }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [usernames, setUsernames] = useState({}); // Store usernames

    useEffect(() => {
        fetchMessages();

        const messageSubscription = supabase
            .channel('public:messages')
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages', filter: `conversation_id=eq.${conversationId}` }, (payload) => {
                setMessages((currentMessages) => [...currentMessages, payload.new]);
                fetchUsername(payload.new.sender_id); // Fetch username for the new message
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
            data.forEach(message => fetchUsername(message.sender_id)); // Fetch usernames for existing messages
        } catch (error) {
            console.error('Error fetching messages:', error.message);
        }
    };

    const fetchUsername = async (userId) => {
        if (!usernames[userId]) {
            const { data, error } = await supabase
                .from('users')
                .select('username')
                .eq('id', userId)
                .single();

            if (data) {
                setUsernames((prevUsernames) => ({ ...prevUsernames, [userId]: data.username }));
            }
        }
    };

    const handleSendMessage = async () => {
        if (newMessage.trim()) {
            try {
                const { data, error } = await supabase
                    .from('messages')
                    .insert([{ content: newMessage, sender_id: currentUserId, conversation_id: conversationId }])
                    .select();

                if (error) throw error;

                // Update the messages state immediately
                setMessages((currentMessages) => [...currentMessages, data[0]]);
                fetchUsername(data[0].sender_id); // Fetch username for the new message

                setNewMessage('');
            } catch (error) {
                console.error('Error sending message:', error.message);
            }
        }
    };

    return (
        <ChatWrapper>
            <ChatHeader>{selectedUser.username}</ChatHeader>
            <ChatMessages>
                {messages.map((message, index) => (
                    <ChatMessage key={index}>
                        <ChatMessageSender>{usernames[message.sender_id] || message.sender_id}</ChatMessageSender>
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
