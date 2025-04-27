# Roaster Client 🐔

The frontend React application for Roaster, a witty chatbot that playfully "roasts" users based on their chat behavior.

## 📋 Overview

This React application provides the user interface for the Roaster chatbot, featuring:

1. A chat interface to interact with the roast bot
2. A dynamic "Roast-O-Meter" that displays real-time metrics
3. An animated chicken mascot that reacts to user messages
4. Real-time communication with the backend using Socket.io

## 🛠️ Tech Stack

- **React.js**: UI library
- **Socket.io-client**: Real-time communication with the server
- **CSS**: Custom styling with responsive design
- **localStorage**: For storing roast metrics between sessions

## 📂 Project Structure

```
client/
├── public/               # Static files
├── src/                  # Source files
│   ├── components/       # React components
│   │   ├── ChatContainer.js    # Chat interface
│   │   ├── ChickenMascot.js    # Animated mascot
│   │   ├── Header.js           # App header
│   │   ├── RoastOMeter.js      # Metrics display
│   ├── App.js           # Main app component
│   ├── index.js         # Entry point
│   └── *.css            # Style files
└── package.json         # Dependencies and scripts
```

## 🚀 Installation

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

The application will start on http://localhost:3000 and will automatically connect to the backend server running on http://localhost:5000.

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop browsers
- Tablets
- Mobile phones

The layout adjusts dynamically based on the screen size.

## 🔄 Real-time Features

- **Live Chat**: Instant messaging with the Roaster bot
- **Dynamic Metrics**: Watch your roast metrics change in real-time
- **Reactive Mascot**: The chicken mascot changes its expressions based on your messages
- **Connection Status**: Visual indicator of server connection status

## 🖌️ Customization

The app uses CSS variables for easy theming. You can modify the colors and styles by editing the variables in `index.css`:

```css
:root {
  --primary-color: #FF6B6B;
  --secondary-color: #FFD93D;
  --accent-color: #6BCB77;
}
```

## 🧪 Testing

```bash
npm test
```

## 📦 Building for Production

```bash
npm run build
```

This will create an optimized production build in the `build` folder, which can be served by the backend when in production mode. 