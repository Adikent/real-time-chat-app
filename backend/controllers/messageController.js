const {
    getMessages,
    createMessage
} = require("../services/messageService");

function fetchMessages(req, res) {
    try {
        const messages = getMessages();
        res.json(messages);
    } catch (error) {
        console.error("Fetch messages error:", error);

        res.status(500).json({
            error: "Unable to fetch messages."
        });
    }
}

function sendMessage(req, res) {
    try {
        const { username, text } = req.body;

        if (!username || !text || !text.trim()) {
            return res.status(400).json({
                error: "Username and message are required."
            });
        }

        const message = createMessage(username, text);

        const io = req.app.get("io");

        io.emit("new_message", message);

        res.status(201).json(message);
    } catch (error) {
        console.error("Send message error:", error);

        res.status(500).json({
            error: "Unable to send message."
        });
    }
}

module.exports = {
    fetchMessages,
    sendMessage
};