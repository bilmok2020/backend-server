const express = require('express');
const User = require('../../../model/User');
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
        password: req.body.password,
    };

    //check if user exist or not
    User.findOne({
        username: username,
        password: password
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

});

module.exports = router;