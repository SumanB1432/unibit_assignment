const express = require('express');
const userSignup = require("../controller/userController/signup");
const userLogin = require("../controller/userController/login");
const tambolaTicket = require("../controller/tambolaController/createTambola");
const getTambola = require("../controller/tambolaController/getTambolaTickets")
const middleware = require("../middleware/auth")

const router = express.Router();


router.post('/signup', userSignup.signup);
router.post("/login",userLogin.loginUser);
router.post("/tambola",middleware.Authentication ,tambolaTicket.generateTicket)
router.get("/tambola",middleware.Authentication,getTambola.getTickets)



module.exports = router;