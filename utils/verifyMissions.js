/**
 * @param {String} qr : Scanned qr code string.
 * @returns {Boolean} is string is valid or not.
 */
function verifyQrCode(qr) {
    return qr === "hangimizsevmedik";
}


module.exports = {
    verifyQrCode,
}