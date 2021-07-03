const { Router } = require('express');
const router = Router();
const authController = require('../controllers/AuthController');
const verifyToken = require('../helpers/verifyToken')

router.get('/', verifyToken, (req, res)=> {
  const user = req.user
  res.json(user)
})

router.post('/register', authController.authRegister);
router.post('/login', authController.authLogin);

module.exports = router;