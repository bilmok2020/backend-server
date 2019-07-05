const User = require('../../../model/User');


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

}

module.exports = {
    getUserIdController,
    getUserProfileController,
    postLoginController
}