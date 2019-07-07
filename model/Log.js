const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    process: String,
    time: {
        type: Date,
        default: Date.now
    },
    starcount: Number
})

const Log = mongoose.model('Log', logSchema);

module.exports = Log;