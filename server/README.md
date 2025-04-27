# Roaster Server 🐔

The backend for Roaster, a witty chatbot that playfully "roasts" users based on their chat behavior.

## 📋 Overview

This Node.js Express server powers the Roaster application by:
1. Analyzing incoming user messages through regex patterns and text analysis
2. Generating appropriate roast responses based on the analysis
3. Updating roast metrics per session
4. Handling real-time communication with Socket.io

## 🛠️ Tech Stack

- **Node.js**: JavaScript runtime
- **Express**: Web framework
- **Socket.io**: Real-time bidirectional communication
- **CORS**: Cross-Origin Resource Sharing support

## 🔧 Project Structure

```
server/
├── server.js          # Main server file
├── roasterLogic.js    # Message analysis and roast generation
├── package.json       # Dependencies and scripts
└── README.md          # This file
```

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Setup
```bash
# Install dependencies
npm install

# Start the server in development mode
npm run dev

# Start the server in production mode
npm start
```

The server will start on http://localhost:5000 by default, or the port specified in the PORT environment variable.

## 📊 API & Socket Events

### Socket.io Events

#### Client to Server
- **`send-message`**: Sends a user message for analysis and roasting
  - Payload: String (the user's message)

#### Server to Client
- **`metrics-update`**: Updates the client with new roast metrics
  - Payload: Object with metrics (spicyLevel, clownEnergy, dramaPotential, keyboardWarriorEnergy)
- **`roast-response`**: Sends a roast response back to the client
  - Payload: Object with text (the roast) and reaction (for the chicken's expression)

## 💭 Message Analysis

The server analyzes messages for the following patterns:

| Pattern | Detection Method | Metrics Impact |
|---------|------------------|----------------|
| Short Messages | `message.split(/\s+/).length <= 2 && message.length < 10` | +5 Spicy, -5 Drama |
| Formal Language | Regex pattern for formal words/phrases | +15 Clown, -5 Drama |
| Emoji Overuse | Count emojis, check ratio to message length | +20 Clown |
| Long Paragraphs | `message.length > 200` | +15 Drama, +10 Spicy |

## 🛡️ Production Deployment

For production:
- Set `NODE_ENV=production` to enable static file serving for the frontend
- The server is configured to work with the React frontend when built and placed in the `../client/build` directory
- Set the `PORT` environment variable if needed

## 🔄 Development

The server uses nodemon in development mode for automatic restarts when files change:
```bash
npm run dev
``` 