const express = require('express');
const router = express.Router();

const joinController = require('../controllers/joinController');

// GET request to join members club
router.get('/club', joinController.join_club_get);

// POST request to join members club
router.post('/club', joinController.join_club_post);

// GET request to become admin
router.get('/admins', joinController.join_admin_get);

// POST request to become admin
router.post('/admins', joinController.join_admin_post);

module.exports = router;
