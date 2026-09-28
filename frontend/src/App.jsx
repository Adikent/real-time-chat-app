import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import "./App.css";

const SERVER_URL = "http://localhost:5000";

function formatTime(timestamp) {
  return new Date(timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function App() {
  const [username, setUsername] = useState(localStorage.getItem("chatUsername")|| "");
  const [entered, setEntered] = useState(Boolean(localStorage.getItem("chatUsername")));

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [typingUser, setTypingUser] = useState("");
  const [online, setOnline] = useState(false);

  const socketRef = useRef(null);
  const typingTimer = useRef(null);

  // Connect to Socket.io after login
  useEffect(() => {
    if (!entered || !username) {
      return;
    }

    const socket = io(SERVER_URL);
    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("Connected to server");
      setOnline(true);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
      setOnline(false);
    });

    socket.on("new_message", (newMessage) => {
      setMessages((currentMessages) => [
        ...currentMessages,
        newMessage,
      ]);
    });

    socket.on("user_typing", (name) => {
      setTypingUser(name);

      clearTimeout(typingTimer.current);

      typingTimer.current = setTimeout(() => {
        setTypingUser("");
      }, 1200);
    });

    return () => {
      socket.disconnect();
    };
  }, [entered, username]);

  // Fetch previous chat history
  useEffect(() => {
    if (!entered) {
      return;
    }

    fetch(`${SERVER_URL}/api/messages`)
      .then((response) => response.json())
      .then((data) => {
        setMessages(data);
      })
      .catch((error) => {
        console.error("Could not load messages:", error);
      });
  }, [entered]);

  function handleLogin(event) {
    event.preventDefault();

    if (!username.trim()) {
      return;
    }

    const trimmedUsername = username.trim();
    localStorage.setItem("chatUsername", trimmedUsername);

    setUsername(trimmedUsername);
    setEntered(true);
  }

  async function sendMessage(event) {
    event.preventDefault();

    if (!message.trim()) {
      return;
    }

    try {
      await fetch(`${SERVER_URL}/api/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          text: message.trim(),
        }),
      });

      setMessage("");
    } catch (error) {
      console.error("Could not send message:", error);
    }
  }

  function handleTyping(event) {
  const value = event.target.value;
  setMessage(value);

  if (socketRef.current && socketRef.current.connected) {
    if (value.trim()) {
      socketRef.current.emit("typing:start", username);
    } else {
      socketRef.current.emit("typing:stop");
    }
  }
}

function handleStopTyping() {
  if (socketRef.current && socketRef.current.connected) {
    socketRef.current.emit("typing:stop");
  }
}

  if (!entered) {
    return (
      <div className="login-container">
        <div className="login-card">
          <h1>Real-Time Chat</h1>

          <p>
            Enter your username to join the conversation.
          </p>

          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />

            <button type="submit">
              Join Chat
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-container">
      <header className="chat-header">
        <div>
          <h1>Real-Time Chat</h1>
          <p>
            Welcome, <strong>{username}</strong>
          </p>
        </div>

        <div className="connection-status">
          <span className={online ? "online-dot" : "offline-dot"} />
          {online ? "Connected" : "Disconnected"}
        </div>
      </header>

      <main className="messages-container">
        {messages.length === 0 ? (
          <div className="empty-message">
            No messages yet. Start the conversation.
          </div>
        ) : (
          messages.map((item) => (
            <div
              className={
                item.username === username
                  ? "message own-message"
                  : "message"
              }
              key={item.id}
            >
              <div className="message-info">
                <strong>{item.username}</strong>
                <span>{formatTime(item.timestamp)}</span>
              </div>

              <p>{item.text}</p>
            </div>
          ))
        )}

        {typingUser && (
          <div className="typing-indicator">
            Someone is typing...
          </div>
        )}
      </main>

      <form className="message-form" onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Write a message..."
          value={message}
          onChange={handleTyping}
          onBlur={handleStopTyping}
        />

        <button type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default App;