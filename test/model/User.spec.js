const User = require('../../model/User');

test('creates a user', () => {
    let obj = {
        username: 'hal9000',
        password: 'imafraidicantdave',
        isAdmin: 1,
        qrDone: {
            qr1: true,
            qr2: true,
            qr3: false
        },
        game: {
            gameDone: false
        }

    };
    let user = new User(obj);

    expect(user).toMatchObject(obj);

});