const {
    generateJsonWebToken
} = require('../../utils/jwtFunctions');

test('generateJsonWebToken function generates tokens', () => {
    let user = {
        username: 'johndoe',
        authority: 0
    }
    let token = generateJsonWebToken(user);
    expect(token).toBeTruthy();
});