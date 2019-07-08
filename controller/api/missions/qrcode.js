const Log = require('../../../model/Log')
const {
    verifyQrCode
} = require('../../../utils/verifyMissions');


const postQrcodeController = async (req, res) => {
    let scannedQrString = req.body.scannedQrString;
    let index = verifyQrCode(scannedQrString);
    if (index !== false && req.user.qrDone[`qr${index + 1}`] == false) {
        req.user.qrDone[`qr${index + 1}`] = true;
        Log.logOption(req.user.firstname, req.user.lastname, "qr" + "" + index + 1, req.user.starCount());
        await req.user.save();
        console.log(req.user.starCount());
        res.json({
            success: true,
            message: 'You\'r rock'
        });
    } else {
        res.status(401).json({
            success: false,
            message: 'QrCode is not matched or already taken'
        });
    }
};

module.exports = {
    postQrcodeController
};