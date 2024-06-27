import React, { useState, useEffect, useRef } from 'react';
import { Box, TextField, IconButton, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, Paper, Container, InputAdornment } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import axios from 'axios';
import './Chatbot.css';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const endOfMessagesRef = useRef(null);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { text: input, user: 'me', timestamp: new Date().toLocaleTimeString() };
    setMessages([...messages, userMessage]);
    setInput(''); // Clear input immediately

    try {
      const response = await axios.post('http://localhost:3002/api/getSuggestions', { query: input });
      const botMessage = { text: response.data.suggestion || "I'm not sure how to respond to that.", user: 'bot', timestamp: new Date().toLocaleTimeString() };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error fetching suggestion:', error);
      const errorMessage = { text: 'Error fetching suggestion, please try again later.', user: 'bot', timestamp: new Date().toLocaleTimeString() };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  return (
    <React.Fragment>
      <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Paper elevation={3} sx={{ maxWidth: 800, width: '90%', margin: 'auto', padding: 3, position: 'relative', zIndex: 1, backgroundColor: '#ffffffcc' }}>
          <Typography variant="h4" textAlign="center" gutterBottom sx={{ color: '#333' }}>Alien Survival Guide Bot</Typography>
          <List sx={{ maxHeight: 500, overflow: 'auto', mb: 2 }}>
            {messages.map((msg, index) => (
              <ListItem key={index} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar>
                    {msg.user === 'bot' ? <ChatBubbleOutlineIcon /> : <PersonOutlineIcon />}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={`${msg.user === 'bot' ? 'Alien Bot' : 'You'} (${msg.timestamp})`} secondary={msg.text} sx={{ color: '#000' }} />
              </ListItem>
            ))}
            <div ref={endOfMessagesRef} />
          </List>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              fullWidth
              variant="outlined"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
              sx={{ mr: 1, backgroundColor: '#fff', borderRadius: 1 }}
              inputProps={{ style: { color: '#000' } }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleSendMessage} color="primary" size="small">
                      <SendIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Paper>
      </Container>
    </React.Fragment>
  );
}

export default Chatbot;
