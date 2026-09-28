function initializeChatSocket(io) {
    io.on("connection", (socket) => {
        console.log("User connected:", socket.id);

        socket.on("typing:start", (username) => {
            socket.broadcast.emit("user_typing", username);
        });

        socket.on("typing:stop", () => {
            socket.broadcast.emit("user_typing", "");
        });

        socket.on("disconnect", () => {
            console.log("User disconnected:", socket.id);
        });
    });
}

module.exports = initializeChatSocket;