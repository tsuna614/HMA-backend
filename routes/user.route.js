const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

const authMiddleware = require("../middlewares/auth.middleware");

// get all users
router.get("/getAllUsers", authMiddleware.isAuth, userController.getAllUsers);

// find user by id
router.get(
  "/getUserById/:id",
  authMiddleware.isAuth,
  userController.getUserById
);

// find user by email
router.get(
  "/getUserByEmail/:email",
  authMiddleware.isAuth,
  userController.getUserByEmail
);

// add 1 user
router.post("/addUser", userController.addUser);

// delete user by email
router.delete(
  "/deleteUserByEmail/:email",
  authMiddleware.isAuth,
  userController.deleteUserByEmail
);

// delete user by id
router.delete(
  "/deleteUserById/:id",
  authMiddleware.isAuth,
  userController.deleteUserById
);

// edit user by id
router.put(
  "/editUserById/:id",
  authMiddleware.isAuth,
  userController.editUserById
);

// edit all users
router.put("/editAllUsers", authMiddleware.isAuth, userController.editAllUsers);

module.exports = router;
