const express = require("express");
const { registerUser ,getAlluser, deleteUser, updateUser} = require("../controllers/userController");
const router =  express.Router();
router.route("/register").post(registerUser);
router.route("/users").get( getAlluser);
router.route("/user/:id").put(updateUser).delete(deleteUser);
module.exports = router;