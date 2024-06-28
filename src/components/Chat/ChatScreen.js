import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MessengerList from './MessengerList';
import Chat from './Chat';
import { supabase } from '../../supabaseClient';


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

const ChatScreen = ({ currentUserId }) => {
    const [conversationId, setConversationId] = useState(null);

    const handleStartConversation = async (otherUserId) => {
        try {
            const participants = [currentUserId].sort();

            // Check if a conversation already exists between the two users
            const { data: existingConversations, error: existingConversationsError } = await supabase
                .from('conversations')
                .select('id')
                .contains('participants', participants);

            if (existingConversationsError) {
                throw existingConversationsError;
            }

            let conversationId;
            if (existingConversations.length > 0) {
                // Conversation already exists
                conversationId = existingConversations[0].id;
            } else {
                // Create a new conversation
                const { data: newConversation, error: newConversationError } = await supabase
                    .from('conversations')
                    .insert([ {participants} ])
                    .select('id')
                    .single();

                if (newConversationError) {
                    throw newConversationError;
                }

                conversationId = newConversation.id;
            }

            setConversationId(conversationId);
        } catch (error) {
            console.error('Error starting conversation:', error.message);
        }
    };

    return (
        <ChatScreenWrapper>
            <MessengerList onStartConversation={handleStartConversation} />
            {conversationId ? (
                <Chat conversationId={conversationId} currentUserId={currentUserId} />
            ) : (
                <div>Select a user to start a conversation</div>
            )}
        </ChatScreenWrapper>
    );
};

export default ChatScreen;