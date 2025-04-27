# Roaster 🐔 - The Sassy Chicken Chat Bot

![Roaster Banner](images/Roaster-Dashboard.png)

A full-stack web application featuring a witty chicken chatbot that playfully "roasts" users based on their chat behavior. As users interact with Roaster, the app analyzes messaging patterns and responds with humorous, light-hearted roasts while dynamically updating a "Roast-O-Meter" that tracks various attributes.

## 🔥 Demo

![Demo GIF](images/Roaster-Dashboard.png)


## ✨ Features

- **Interactive Chat Interface**: Send messages and receive witty, customized roasts
- **Dynamic Analysis**: Messages are analyzed in real-time for patterns like:
  - Short one-word messages → playful roast about laziness
  - Overly formal language → teasing about being "too serious"
  - Excessive emoji use → jokes about emoji artistry
  - Rapid message spamming → roast about keyboard warrior energy
  - Long paragraphs → jokes about writing novels
- **Live Roast-O-Meter**: Visual gauge that tracks and displays:
  - 🌶️ Spicy Level
  - 🤡 Clown Energy
  - 🎭 Drama Potential
  - ⌨️ Keyboard Warrior Energy
- **Reactive Mascot**: Animated chicken character that changes expressions based on user messages
- **Responsive Design**: Fully mobile-friendly interface
- **Persistent Metrics**: Roast metrics stored in localStorage between sessions

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library for building the interface
- **Socket.io-client** - Real-time bidirectional communication
- **CSS3** - Custom styling with animations
- **LocalStorage API** - For persisting user metrics between sessions
- **WebSockets** - For real-time chat functionality

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **Socket.io** - Real-time event-based communication
- **RegEx** - For message pattern analysis
- **CORS** - Cross-Origin Resource Sharing

### Development Tools
- **npm** - Package management
- **Nodemon** - Server auto-reloading during development
- **ESLint** - Code quality
- **Git** - Version control
- **GitHub** - Source code management
- **Vercel** - Deployment platform

## 📋 Architecture

The application follows a client-server architecture with WebSocket communication:

```
┌─────────────────┐      WebSockets      ┌─────────────────┐
│                 │<-------------------->│                 │
│  React Frontend │   (Socket.io)        │  Node.js Backend│
│                 │                      │                 │
└─────────────────┘                      └─────────────────┘
        │                                        │
        │                                        │
        ▼                                        ▼
┌─────────────────┐                      ┌─────────────────┐
│  LocalStorage   │                      │ Message Analysis│
│   (Browser)     │                      │    Engine       │
└─────────────────┘                      └─────────────────┘
```

## 🚀 Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

### Clone the Repository
```bash
git clone https://github.com/sidjey-y/roaster-chatbot.git
cd roaster
```

### Backend Setup
```bash
cd server
npm install
npm run dev
```
The server will start on http://localhost:5000

### Frontend Setup
```bash
cd client
npm install
npm start
```
The client will start on http://localhost:3000
>

## 🧠 How It Works

1. User connects to the application and a socket connection is established
2. Initial Roast-O-Meter metrics are sent from server to client
3. User sends a message through the chat interface
4. Server analyzes the message for patterns using regex and text analysis
5. Server generates an appropriate roast response based on the analysis
6. Server updates the user's metrics (Spicy Level, Clown Energy, etc.)
7. Updated metrics and roast response are sent back to the client
8. Client updates the UI with the roast and new metrics
9. The chicken mascot reacts with an appropriate expression

## 🤔 Message Analysis Details

| Behavior Pattern | Detection Method | Metrics Impact | Chicken Reaction |
|------------------|------------------|---------------|------------------|
| Short Messages | `message.length < 10 && words <= 2` | +5 Spicy, -5 Drama | Smug 😏 |
| Formal Language | Regex for formal phrases | +15 Clown, -5 Drama | Laughing 😂 |
| Emoji Overuse | `(emojiCount / messageLength) > 0.15` | +20 Clown | Shocked 😱 |
| Long Messages | `message.length > 200` | +15 Drama, +10 Spicy | Sleepy 😴 |
| Message Spamming | Time between messages < 1s | +20 Keyboard Warrior | Shocked 😱 |

## 🔄 Deployment

The application is configured for easy deployment on Vercel:

1. Fork this repository to your GitHub account
2. Connect your Vercel account to your GitHub repository
3. Configure the build settings:
   - Build Command for client: `cd client && npm install && npm run build`
   - Output Directory for client: `client/build`
   - Build Command for server: `cd server && npm install`
   - Output Directory for server: `server`
4. Deploy!

## 🗂️ Project Structure

```
roaster/
├── client/                 # Frontend React application
│   ├── public/             # Static assets
│   │   ├── components/     # React components
│   │   │   ├── ChatContainer.js
│   │   │   ├── ChickenMascot.js
│   │   │   ├── Header.js
│   │   │   └── RoastOMeter.js
│   │   ├── App.js          # Main application component
│   │   ├── index.js        # Entry point
│   │   └── *.css           # Stylesheets
│   └── package.json        # Frontend dependencies
│
├── server/                 # Backend Node.js application
│   ├── server.js           # Express and Socket.io setup
│   ├── roasterLogic.js     # Message analysis and roast generation
│   └── package.json        # Backend dependencies
│
├── vercel.json             # Vercel deployment configuration
└── README.md               # Project documentation
```

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 🔮 Future Enhancements

- User authentication
- Customizable chicken mascot
- More advanced language analysis with NLP
- Custom roast categories
- Voice input/output support
- Internationalization support
- Dark/light theme toggle
- Achievement badges based on roast patterns
- Social sharing of favorite roasts

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Socket.io](https://socket.io/) for real-time communication
- [React](https://reactjs.org/) for the UI framework
- [Express](https://expressjs.com/) for the backend framework
- [Vercel](https://vercel.com/) for deployment
- All contributors and testers who helped shape this project

## 🧪 Core Roast Categories

| Category | Example Roasts |
|----------|----------------|
| Short Messages | "Saving those keystrokes for something important later?" |
| Formal Language | "Did you swallow a dictionary before typing that message?" |
| Emoji Overuse | "Are you communicating or just having a seizure on the emoji keyboard?" |
| Long Messages | "I asked for a message, not your autobiography." |
| Message Spamming | "Your keyboard might file for abuse soon." |

---

<div align="center">
  <p>Created with 🔥 and 🐔 by <a href="https://github.com/yourusername">Sidjey</a></p>
  <p>
    <a href="#"><img src="https://img.shields.io/github/stars/yourusername/roaster?style=social" alt="GitHub stars"></a>
    <a href="#"><img src="https://img.shields.io/github/forks/yourusername/roaster?style=social" alt="GitHub forks"></a>
    <a href="#"><img src="https://img.shields.io/github/issues/yourusername/roaster" alt="GitHub issues"></a>
    <a href="#"><img src="https://img.shields.io/github/license/yourusername/roaster" alt="License"></a>
  </p>
</div> 
