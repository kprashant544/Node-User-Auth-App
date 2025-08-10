const express = require("express");

const userController = require("../controllers/userController");

const router = express.Router();

const verifyToken = require("../middlewares/verifyToken");

router.post("/sign-up", userController.register);
router.post("/login", userController.login);
router.get("/profile", verifyToken, userController.profile);

module.exports = router;
