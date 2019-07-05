const express = require('express');
const router = express.Router();
const auth = require('../../../middleware/auth');

const {
    getUserIdController,
    getUserProfileController,
    postLoginController
} = require('../../../controller/api/users');

/**
 * Returns a user's private data to client
 * Required authentication
 */
router.get('/profile', auth, getUserProfileController);

/**
 * Returns a user's public data to client
 */
router.get('/:id', getUserIdController);

/**
 * response a jsonwebtoken for authentication
 */
router.post('/login', postLoginController);


module.exports = router;