const verifiedQrCodes = [
    "hangimizsevmedik",
    "dembabadembaba",
    "kösebasindaaa"
]

/**
 * @param {String} qr : Scanned qr code string.
 * @returns {Boolean | Number } is string is valid returns index of matched qrCode, if it's not valid returns false
 */
function verifyQrCode(qr) {
    for (let i = 0; i < verifiedQrCodes.length; i++) {
        if (verifiedQrCodes[i] === qr) {
            return i;
        }
    }
    return false;
}


module.exports = {
    verifyQrCode,
    verifiedQrCodes
}