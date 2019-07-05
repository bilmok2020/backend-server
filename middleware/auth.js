const jwt = require('jsonwebtoken');
const User = require('../model/User')

let tokenSecret = process.env.JWT_SECRET || "receptayyiperodan";

module.exports = (req, res, next) => {
    //Get jsonwebtoken from header of http request
    let token = req.headers['x-access-token'] || req.headers['authentication'];
    //if token exist
    if (token) {
        //Verifies token is valid or not
        jwt.verify(token, tokenSecret, (err, decoded) => {
            if (err) {
                return res.status(400).json({
                    succes: false,
                    message: 'Token is not valid'
                });

            } else {
                //if there is no error set req.user as decoded toke data
                User.findOne({ username: decoded.username })
                    .then((err, result) => {
                        if (err) {
                            console.log("User not found!")
                        }
                        else {
                            req.user = result;
                        }
                    })
                //Go next middleware or router
                next();
            }
        });
    } else {
        return res.status(400).json({
            succes: false,
            message: 'Auth token is not supplied'
        });
    }
}