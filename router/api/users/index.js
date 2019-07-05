const express = require('express');
const router = express.Router();
const auth = require('../../../middleware/auth');
const {
    generateJsonWebToken
} = require('../../../utils/jwtFunctions');

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

<<<<<<< HEAD
/**
 * response a jsonwebtoken for authentication
 */
router.post('/login', postLoginController);
=======
router.post('/login', (req, res) => {
    let user = {
        username: req.body.username,
        password: req.body.password,
    };

    //check if user exist or not
    User.findOne({
        username: user.username,
        password: user.password
    }, function (err, user) {
        //if error occurs.
        if (err) {
            console.log(err);
            return res.status(500).send();
        }
        //if user does not exist.
        if (!user) {
            return res.status(403).send();
        }
        //if user exist.
        return res.status(200).send();
    });

    //generate token using user
    let token = generateJsonWebToken(user);
    //returns json token for authenticated user
    res.json({
        success: true,
        message: 'Authentication successfull',
        token: token,
    });
>>>>>>> 81ce4bedd260403818bfe0d3ce7fd05cfbb64081


module.exports = router;