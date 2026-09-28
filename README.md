# Real-Time Chat Application

A real-time chat application built using React, Node.js, Express, and Socket.io.

The application supports real-time messaging between connected users, persistent chat history, timestamps, username-based entry, and a typing indicator.

---

## Features

- Real-time messaging using Socket.io
- Send and receive messages without refreshing the page
- Persistent chat history using a local JSON file
- Message timestamps
- Username-based dummy login
- Typing indicator
- Connection status indicator
- REST APIs for sending and fetching messages
- Graceful handling of API and socket errors
- Responsive chat interface

---

## Tech Stack

### Frontend

- React
- Vite
- Socket.io Client
- CSS

### Backend

- Node.js
- Express
- Socket.io

### Storage

- JSON file (`messages.json`)

---

## Project Structure

```text
real-time-chat-app/
│
├── backend/
│   ├── controllers/
│   │   └── messageController.js
│   │
│   ├── data/
│   │   └── messages.json
│   │
│   ├── middleware/
│   │
│   ├── routes/
│   │   └── messageRoutes.js
│   │
│   ├── services/
│   │   └── messageService.js
│   │
│   ├── sockets/
│   │   └── chatSocket.js
│   │
│   ├── utils/
│   │
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── public/
│   └── package.json
│
├── README.md
└── .gitignore