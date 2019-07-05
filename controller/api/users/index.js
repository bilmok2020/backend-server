const User = require('../../../model/User');
const {
    generateJsonWebToken
} = require('../../../utils/jwtFunctions');


const getUserProfileController = (req, res) => {
    res.json(req.user);
}

const getUserIdController = (req, res) => {
    res.send('PLACEHOLDER');
}

const postLoginController = (req, res) => {
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
        //generate token using user
        let token = generateJsonWebToken(user);
        //returns json token for authenticated user
        res.status(200).json({
            success: true,
            message: 'Authentication successfull',
            token: token,
        });
    });



}

module.exports = {
    getUserIdController,
    getUserProfileController,
    postLoginController
}