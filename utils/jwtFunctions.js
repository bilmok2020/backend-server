const jwt = require('jsonwebtoken');
let tokenSecret = process.env.JWT_SECRET || "receptayyiperodan";

/**
 * Generate a jsonwebtoken for authentication and autherization
 * @param User{Object} : a objects that contains username and password properties
 * @returns {String} : jsonwebtoken
 */
function generateJsonWebToken({
    username,
    password,
    authority
}) {
    //if username or password does not exist return false
    if (!username && !password) {
        return false;
    }
    //Generates token
    let token = jwt.sign({
        username: username,
        authority: admin || 0
    },
        tokenSecret, {
            expiresIn: '72h'
        }
    );
    //returns generated jsonwebtoken
    return token;
}

module.exports = {
    generateJsonWebToken,
}