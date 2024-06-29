import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { supabase } from '../../supabaseClient';

const MessengerWrapper = styled.div`
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
    overflow-y: auto; /* Add this to enable scrolling */
`;

const MessengerTitle = styled.h2`
    font-size: 1.5em;
    text-align: center;
    margin-bottom: 20px;
    font-family: 'Orbitron', sans-serif;
`;

const MessengerItem = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    background: rgba(76, 151, 255, 0.4);
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

const MessengerList = ({ onStartConversation, currentUserId }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            let { data: users, error } = await supabase.from('users').select('*');
            if (error) {
                throw error;
            }
            setUsers(users.filter(user => user.id !== currentUserId)); // Exclude the current user
        } catch (error) {
            console.error('Error fetching users:', error.message);
        }
    };

    return (
        <MessengerWrapper>
            <MessengerTitle>Messenger</MessengerTitle>
            {users.map((user) => (
                <MessengerItem key={user.id} onClick={() => onStartConversation(user.id, user.username)}>
                    <MessengerItemImage src={`https://gravatar.com/avatar/${user.id}?d=identicon`} alt={user.username} />
                    <MessengerItemContent>
                        <MessengerItemName>{user.username}</MessengerItemName>
                        <MessengerItemDescription>{user.email}</MessengerItemDescription>
                    </MessengerItemContent>
                </MessengerItem>
            ))}
        </MessengerWrapper>
    );
};

export default MessengerList;
