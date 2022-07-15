const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

// GET request to register new user
router.get('/register', userController.register_get);

// POST request to register new user
router.post('/register', userController.register_get);

// GET request to login user
router.get('/login', userController.login_get);

// POST request to login user
router.post('/login', userController.login_post);

module.exports = router;
