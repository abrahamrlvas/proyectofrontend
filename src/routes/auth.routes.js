const { Router } = require('express');
const router = Router();
const authController = require('../controllers/AuthController');
const verifyToken = require('../helpers/verifyToken')

router.get('/', verifyToken, (req, res)=> {
  res.send('hola')
})

router.post('/register', authController.authRegister);
router.post('/login', authController.authLogin);

module.exports = router;