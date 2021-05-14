const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/AuthController')

// Only for /api/auth

/** 
 * @route POST /api/auth/register
 * @desc Register endpoint
 * @access Public
*/

router.post("/register", AuthController.authRegister)


/**
 * @route POST /api/auth/login
 * @desc Login endpoint
 * @access Public
*/

router.post("/login", AuthController.authLogin)
//router.post("/help", AuthController.authHelp)


module.exports = router;