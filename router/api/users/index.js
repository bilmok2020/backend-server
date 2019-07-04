const express = require('express');
const router = express.Router();
const auth = require('../../../middleware/auth');
const {
    generateJsonWebToken
} = require('../../../utils/jwtFunctions');


/**
 * Returns a user's private data to client
 * Required authentication
 */
router.get('/profile', auth, (req, res) => {
    res.json(req.user);
});


/**
 * Returns a user's public data to client
 */
router.get('/:id', (req, res) => {
    res.send('PLACEHOLDER');
});


router.post('/login', (req, res) => {
    let user = {
        username: req.body.username,
        password: req.body.passowrd,
    };
    /**
     * TODO: check user is valid  or not on database
     * if it's not valid return 403 error
     */

    //generate token using user
    let token = generateJsonWebToken(user);
    //returns json token for authenticated user
    res.json({
        success: true,
        message: 'Authentication successfull',
        token: token,
    })

});

module.exports = router;