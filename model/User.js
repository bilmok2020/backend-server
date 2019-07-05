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
    qrDone: {
        qr1: {
            type: Boolean,
            default: false
        },
        qr2: {
            type: Boolean,
            default: false
        },
        qr3: {
            type: Boolean,
            default: false
        }

    },
    game: {
        gameDone: {
            type: Boolean,
            default: 0,
        },
        highScore: {
            type: Number,
            default: 0
        }
    },

})

var User = mongoose.model('User', userSchema);

let user = new User({
    username: 'ahmetcan',
    password: 'ozcan'
})
user.save();


module.exports = User;