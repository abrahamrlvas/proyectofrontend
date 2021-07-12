const { Router } = require("express");
const router = Router();
const userController = require("../controllers/userController");

router.get("/users", userController.getUsersAll);

module.exports = router;
