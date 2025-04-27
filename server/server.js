const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const path = require('path');
const { analyzeMessage, generateRoast } = require('./roasterLogic');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);
  
  const initialMetrics = {
    spicyLevel: 20,
    clownEnergy: 20,
    dramaPotential: 20,
    keyboardWarriorEnergy: 20
  };
  
  socket.emit('metrics-update', initialMetrics);
  
  socket.on('send-message', (message) => {
    console.log(`Message received from ${socket.id}:`, message);
    
    const analysis = analyzeMessage(message);
    
    const roastResponse = generateRoast(analysis);
    
    const updatedMetrics = {
      spicyLevel: Math.min(100, Math.max(0, initialMetrics.spicyLevel + analysis.spicyModifier)),
      clownEnergy: Math.min(100, Math.max(0, initialMetrics.clownEnergy + analysis.clownModifier)),
      dramaPotential: Math.min(100, Math.max(0, initialMetrics.dramaPotential + analysis.dramaModifier)),
      keyboardWarriorEnergy: Math.min(100, Math.max(0, initialMetrics.keyboardWarriorEnergy + analysis.keyboardWarriorModifier))
    };
    
    socket.emit('roast-response', { 
      text: roastResponse,
      reaction: analysis.reaction 
    });
    
    socket.emit('metrics-update', updatedMetrics);
  });
  
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🐔`);
}); 