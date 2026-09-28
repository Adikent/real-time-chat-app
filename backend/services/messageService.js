const fs = require("fs");
const path = require("path");

const dataFile = path.join(__dirname, "..", "data", "messages.json");

function getMessages() {
    try {
        const data = fs.readFileSync(dataFile, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Could not read messages:", error);
        return [];
    }
}

function createMessage(username, text) {
    const messages = getMessages();

    const message = {
        id: Date.now(),
        username: username.trim(),
        text: text.trim(),
        timestamp: new Date().toISOString()
    };

    messages.push(message);

    fs.writeFileSync(
        dataFile,
        JSON.stringify(messages, null, 2)
    );

    return message;
}

module.exports = {
    getMessages,
    createMessage
};