# Real-Time Chat Application

A full-stack real-time chat application built with React, Node.js, Express, and Socket.IO.

The application enables users to exchange messages in real time with message persistence, timestamps, typing indicators, username-based entry, and connection status.

---

## Features

- Real-time messaging using Socket.IO
- Send and receive messages without refreshing the page
- Persistent chat history using a local JSON file
- Message timestamps
- Username-based entry
- Typing indicator
- Connection status indicator
- REST APIs for sending and fetching messages
- Socket and API error handling
- Responsive chat interface

---

## Tech Stack

### Frontend

- React
- Vite
- Socket.IO Client
- CSS

### Backend

- Node.js
- Express.js
- Socket.IO

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
│   ├── routes/
│   │   └── messageRoutes.js
│   │
│   ├── services/
│   │   └── messageService.js
│   │
│   ├── sockets/
│   │   └── chatSocket.js
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