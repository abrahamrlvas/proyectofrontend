const { Router } = require('express');
const router = Router();
const authController = require('../controllers/AuthController');
const verifyToken = require('../middlewares/verifyToken')
const isAdmin = require('../middlewares/adminRoles')

router.get('/', verifyToken, isAdmin, (req, res)=> {
  const user = req.user
  res.json(user)
})

router.post('/register', authController.authRegister);
router.post('/login', authController.authLogin);

module.exports = router;