const { Router } = require('express');
const router = Router();
const messageController = require('../controllers/MessagesController');

router.get('/messages', messageController.getMessage )

module.exports = router;