const { Router } = require("express");
const router = Router();
const userController = require("../controllers/userController");

router.post("/users", userController.getUsersAll);

module.exports = router;
