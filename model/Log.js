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

class LogClass {
    //Log options and printing log.
    static async logOptions(firstname, lastname, process, starcount) {

        const log = new Log({
            firstname: firstname,
            lastname: lastname,
            process: process,
            starcount: starcount
        });
        try {
            log.save();
        } catch (e) {
            console.log("log couldn't save.")
        }

        console.log(firstname + " " + lastname + " " + process + " tamamladı!" + " YILDIZ SAYISI: " + starcount);



    }
}

logSchema.loadClass(LogClass);

const Log = mongoose.model('Log', logSchema);

module.exports = Log;