import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import './App.css';
import ChatContainer from './components/ChatContainer';
import RoastOMeter from './components/RoastOMeter';
import ChickenMascot from './components/ChickenMascot';
import Header from './components/Header';

const socket = io(process.env.NODE_ENV === 'production' ? window.location.origin : 'http://localhost:5000');

function App() {
  const [messages, setMessages] = useState([]);
  const [metrics, setMetrics] = useState({
    spicyLevel: 20,
    clownEnergy: 20,
    dramaPotential: 20,
    keyboardWarriorEnergy: 20
  });
  const [chickenReaction, setChickenReaction] = useState('neutral');
  
  const [isConnected, setIsConnected] = useState(socket.connected);
  
  const lastMessageTimestamp = useRef(Date.now());
  const messageHistory = useRef([]);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
      console.log('Connected to server');
    });
    
    socket.on('disconnect', () => {
      setIsConnected(false);
      console.log('Disconnected from server');
    });
    
    socket.on('roast-response', (data) => {
      setMessages(prevMessages => [
        ...prevMessages,
        { text: data.text, sender: 'roaster' }
      ]);
      
      setChickenReaction(data.reaction);
      
      localStorage.setItem('roasterMetrics', JSON.stringify(metrics));
    });
    
    socket.on('metrics-update', (updatedMetrics) => {
      setMetrics(updatedMetrics);
    });
    
    const savedMetrics = localStorage.getItem('roasterMetrics');
    if (savedMetrics) {
      setMetrics(JSON.parse(savedMetrics));
    }
    
    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('roast-response');
      socket.off('metrics-update');
    };
  }, [metrics]); 

  const handleSendMessage = (message) => {
    if (!message.trim()) return;
    
    const now = Date.now();
    const timeSinceLastMessage = now - lastMessageTimestamp.current;
    let isSpam = false;
    
    messageHistory.current.push({
      text: message,
      timestamp: now
    });
    
    if (messageHistory.current.length >= 3) {
      const lastThreeMessages = messageHistory.current.slice(-3);
      const allQuick = lastThreeMessages.every((msg, i, arr) => {
        if (i === 0) return true;
        return msg.timestamp - arr[i-1].timestamp < 1000;
      });
      
      if (allQuick) {
        isSpam = true;
        setChickenReaction('shocked');
      }
    }
    
    setMessages(prevMessages => [
      ...prevMessages, 
      { text: message, sender: 'user' }
    ]);
    
    socket.emit('send-message', message);
    
    lastMessageTimestamp.current = now;
    
    if (messageHistory.current.length > 10) {
      messageHistory.current.shift();
    }
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        
        <div className="main-content">
          <div className="chat-section">
            <ChickenMascot reaction={chickenReaction} />
            <ChatContainer 
              messages={messages} 
              onSendMessage={handleSendMessage} 
              isConnected={isConnected}
            />
          </div>
          
          <div className="meter-section">
            <RoastOMeter metrics={metrics} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 