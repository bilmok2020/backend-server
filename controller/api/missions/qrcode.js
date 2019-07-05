const User = require('../../../model/User');

const {
    verifyQrCode
} = require('../../../utils/verifyMissions');


const postQrcodeController = async (req, res) => {
    let scannedQrString = req.body.scannedQrString;
    let index = verifyQrCode(scannedQrString);
    if (index !== false) {

        req.user.qrDone[`qr${index + 1}`] = true;
        await req.user.save();
        res.json({
            success: true,
            message: 'You\'r rock'
        });
    } else {
        res.status(401).json({
            success: false,
            message: 'QrCode is not matched'
        });
    }
}

module.exports = {
    postQrcodeController
}