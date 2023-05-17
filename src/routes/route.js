const express = require('express');
const userSignup = require("../controller/userController/signup");
const userLogin = require("../controller/userController/login")

const router = express.Router();


router.post('/signup', userSignup.signup);
router.post("/login",userLogin.loginUser)



module.exports = router;