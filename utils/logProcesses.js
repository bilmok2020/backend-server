
const Log = require('../model/Log')


function logOptions(firstname, lastname, process, starcount) {

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



}
module.exports = logOptions;