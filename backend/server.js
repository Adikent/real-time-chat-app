const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const messageRoutes = require("./routes/messageRoutes");
const initializeChatSocket = require("./sockets/chatSocket");

const app = express();
const server = http.createServer(app);

const PORT = 5000;

// Middleware
app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());

// Socket.io
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});

// Make Socket.io available to controllers
app.set("io", io);

// API routes
app.use("/api/messages", messageRoutes);

// Health check
app.get("/", (req, res) => {
    res.json({
        message: "Real-Time Chat Server is running!"
    });
});

// Socket.io events
initializeChatSocket(io);

// Start server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});