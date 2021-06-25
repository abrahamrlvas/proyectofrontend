const { Router } = require('express');
const router = Router();
const loginController = require('../controllers/AuthController');

router.post('/register', loginController.authRegister);
router.post('/login', loginController.authLogin);

module.exports = router;