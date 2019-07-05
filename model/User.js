const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    firstname: String,
    lastname: String,
    isAdmin: Number,
    qrDone: [{
        qr1: Number, default: 0,
        qr2: Number, default: 0,
        qr3: Number, default: 0

    }],
    game: {
        gameDone: Number, default: 0,
        highScore: Number, default: 0
    },

})

var User = mongoose.model('User', userSchema);


module.exports = User;