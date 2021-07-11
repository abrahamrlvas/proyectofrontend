const { Router } = require('express');
const router = Router();
const authController = require('../controllers/AuthController');
const verifyToken = require('../middlewares/verifyToken')
const isAdmin = require('../middlewares/adminRoles')
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

router.get('/', verifyToken, isAdmin, (req, res)=> {
  const user = req.user
  res.json(user)
})

router.post('/register', multer({ storage }).single('file'), authController.authRegister);
router.post('/login', authController.authLogin);

module.exports = router;