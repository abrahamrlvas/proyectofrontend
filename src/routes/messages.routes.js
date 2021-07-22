const { Router } = require("express");
const router = Router();
const messageController = require("../controllers/MessagesController");
const conversationController = require("../controllers/conversationController");

router.get("/messages", messageController.getMessage);
router.post("/message", messageController.getMessagePrivate);
router.post("/message/time", messageController.getFindMessage);
router.post("/conversation", conversationController.getConversation);

module.exports = router;
