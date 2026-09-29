# Real-Time Chat Application

A full-stack real-time chat application built using React, Node.js, Express, and Socket.IO.

The application allows users to send and receive messages in real time, view previous messages after refreshing the application, and see message timestamps.

---

## Features

- Real-time messaging using Socket.IO
- Instant message delivery without page refresh
- Persistent chat history using a local JSON file
- Message timestamps
- Username-based dummy login
- Typing indicator
- Connection status indicator
- REST APIs for sending and fetching messages
- Graceful API and Socket.IO error handling
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

- Local JSON file (`messages.json`)

---

## Project Structure

```text
real-time-chat-app/
│
├── backend/
│   ├── controllers/
│   │   └── messageController.js
│   ├── data/
│   │   └── messages.json
│   ├── routes/
│   │   └── messageRoutes.js
│   ├── services/
│   │   └── messageService.js
│   ├── sockets/
│   │   └── chatSocket.js
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
│   ├── public/
│   └── package.json
│
├── README.md
└── .gitignore

## Setup Instructions

### 1.Clone the Repository

```bash
git clone https://github.com/Adikent/real-time-chat-app.git
cd real-time-chat-app

```

## Project Demo

A screen recording demonstrating the main features of the Real-Time Chat Application:

[Watch the Project Demo](https://drive.google.com/file/d/1uQdV1v_OJ0ogPVqxdO0l3f-v54kaHiAR/view?usp=drivesdk)