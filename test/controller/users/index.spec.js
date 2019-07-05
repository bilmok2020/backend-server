const {
    getUserIdController,
    getUserProfileController,
    postLoginController
} = require('../../../controller/api/users');
const {
    generateJsonWebToken
} = require('../../../utils/jwtFunctions')
const User = require('../../../model/User');

let userObj;
let jsonwebtoken;
test('posts /api/users/login correctly', () => {
    //Write a temp user to database for testing
    userObj = {
        username: `user${Math.floor(Math.random()*1000)}`,
        password: '20232023'
    }
    let user = new User(userObj);
    user.save((err, result) => {
        //if error occurs fail test
        expect(err).toBeFalsy();

        //Generate fake req object
        let req = {
            body: userObj
        };
        let res = {
            status(code) {
                expect(code).toBe(200);
                return {
                    json(obj) {
                        expect(obj.token).toBe(generateJsonWebToken(userObj));
                        jsonwebtoken = obj.token;
                    }
                }
            }
        };
        let next = () => {};
        postLoginController(req, res, next);
        //Delete temp user after testing.
        User.deleteOne({
            username: userObj.username
        }, (err, result) => {
            expect(err).toBeFalsy();
        })
    });

});

test('gets /api/users/profile correctly', () => {

});