const express = require("express");

const userController = require("../controllers/userController");

const router = express.Router();

//Middleware
const verifyToken = require("../middlewares/verifyToken");

router.post("/auth/sign-up", userController.register);
router.post("/auth/login", userController.login);
router.get("/auth/users", verifyToken, userController.getUsers);
router.get("/auth/user/:id", verifyToken, userController.getUserByID);
router.put("/auth/edit-user/:id", verifyToken, userController.editUser);
router.delete("/auth/delete-user/:id", verifyToken, userController.deleteUser);

module.exports = router;
