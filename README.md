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
## Real-Time Communication

Socket.IO is used for real-time communication in the application.

It is used for:
- Delivering new messages to connected users in real time
- Showing the typing indicator
- Handling connection and disconnection events

REST APIs are used for sending messages and fetching chat history.

## Design Decisions

- React was used for the frontend because the assignment allows React as an alternative to the preferred React Native implementation.
- Socket.IO was used for mandatory real-time communication.
- REST APIs are used for sending messages and fetching chat history.
- Backend responsibilities are separated into routes, controllers, services, and socket handlers.
- `messageService.js` handles message storage and retrieval logic.
- Chat history is persisted in `messages.json` for the scope of this assignment.
- The frontend API URL is configurable through an environment variable.

## Assumptions

- Username-based entry is used as dummy authentication.
- Production-level authentication is outside the scope of this assignment.
- Local JSON storage is sufficient for demonstrating persistent chat history for this assignment.

## Error Handling

API and Socket.IO errors are handled to prevent unexpected failures and maintain connection status.

During debugging, browser Developer Tools can be used to inspect:
- Console errors
- Network requests
- HTTP status codes
- API request and response data

Server-side errors can be checked in the backend terminal.

## Project Demo

A screen recording demonstrating the main features of the Real-Time Chat Application:

[Watch the Project Demo](https://drive.google.com/file/d/1uQdV1v_OJ0ogPVqxdO0l3f-v54kaHiAR/view?usp=drivesdk)