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
})

var User = mongoose.model('User', userSchema);


module.exports = User;