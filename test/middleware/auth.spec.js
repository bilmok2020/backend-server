const auth = require('../../middleware/auth');
const {
    generateJsonWebToken
} = require('../../utils/jwtFunctions');

test('Authentication verifies json web token correctly', () => {
    let exampleUser = {
        username: 'john',
        password: 'johndoe2023',
        admin: 0
    }

    //Generate a token
    let token = generateJsonWebToken(exampleUser);
    //Generate fake middleware parameters
    let req = {
        headers: {
            'x-access-token': token
        }
    };

    let res = {
        send(status) {
            expect(status).toBe(400);
            return {
                json(obj) {
                    expect(obj.success).toBe(true);
                }
            }
        }
    }

    function next() {}

    auth(req, res, next);


});