import React, { useState, useRef, useEffect } from 'react';
import './ChatContainer.css';

const ChatContainer = ({ messages, onSendMessage, isConnected }) => {
  const [messageInput, setMessageInput] = useState('');
  const messagesEndRef = useRef(null);
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (messageInput.trim()) {
      onSendMessage(messageInput);
      setMessageInput('');
    }
  };
  
  return (
    <div className="chat-container">
      <div className="connection-status">
        <div className={`status-indicator ${isConnected ? 'connected' : 'disconnected'}`}></div>
        <span>{isConnected ? 'Connected' : 'Disconnected'}</span>
      </div>
      
      <div className="messages-container">
        {messages.length === 0 ? (
          <div className="empty-state">
            <p>Say something to get roasted by the chicken!</p>
          </div>
        ) : (
          messages.map((message, index) => (
            <div 
              key={index} 
              className={`message ${message.sender === 'user' ? 'user-message' : 'roaster-message'}`}
            >
              {message.sender === 'roaster' && <div className="message-avatar">🐔</div>}
              <div className="message-bubble">
                <p>{message.text}</p>
              </div>
              {message.sender === 'user' && <div className="message-avatar">👤</div>}
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <form className="message-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          placeholder="Type a message to get roasted..."
          disabled={!isConnected}
        />
        <button type="submit" disabled={!messageInput.trim() || !isConnected}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatContainer; 