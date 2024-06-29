import React, { useState } from 'react';
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
    padding: 20px;
    padding-bottom: 40px; /* Add padding at the bottom */
    box-sizing: border-box;
    overflow: hidden; /* Add this to prevent overflow */

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
    }
`;

const ChatScreen = ({ currentUserId }) => {
    const [conversationId, setConversationId] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleStartConversation = async (otherUserId, otherUsername) => {
        try {
            console.log('currentUserId:', currentUserId);
            console.log('otherUserId:', otherUserId);

            if (!currentUserId || !otherUserId) {
                throw new Error('User IDs must be valid UUIDs');
            }

            const participants = [currentUserId, otherUserId].sort(); // Ensure correct participant order

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
                    .insert([{ participants }])
                    .select('id')
                    .single();

                if (newConversationError) {
                    throw newConversationError;
                }

                conversationId = newConversation.id;
            }

            setConversationId(conversationId);
            setSelectedUser({ id: otherUserId, username: otherUsername });
        } catch (error) {
            console.error('Error starting conversation:', error.message);
        }
    };

    return (
        <ChatScreenWrapper>
            <MessengerList onStartConversation={handleStartConversation} currentUserId={currentUserId} />
            {conversationId ? (
                <Chat conversationId={conversationId} currentUserId={currentUserId} selectedUser={selectedUser} />
            ) : (
                <div>Select a user to start a conversation</div>
            )}
        </ChatScreenWrapper>
    );
};

export default ChatScreen;
