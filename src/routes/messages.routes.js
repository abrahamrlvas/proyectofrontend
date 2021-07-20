const { Router } = require("express");
const router = Router();
const messageController = require("../controllers/MessagesController");

router.get("/messages", messageController.getMessage);
router.post("/message", messageController.getMessagePrivate);

module.exports = router;
