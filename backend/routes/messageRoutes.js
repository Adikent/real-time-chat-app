const express = require("express");

const {
    fetchMessages,
    sendMessage
} = require("../controllers/messageController");

const router = express.Router();

// Fetch chat history
router.get("/", fetchMessages);

// Send a new message
router.post("/", sendMessage);

module.exports = router;