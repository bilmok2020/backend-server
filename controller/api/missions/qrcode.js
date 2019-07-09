const Log = require('../../../model/Log')
const {
    verifyQrCode
} = require('../../../utils/verifyMissions');


const postQrcodeController = async (req, res) => {
    let scannedQrString = req.body.scannedQrString;
    let index = verifyQrCode(scannedQrString);
    //Check qr index and user take this qr before or not.
    if (index !== false && req.user.qrDone[`qr${index + 1}`] == false) {
        req.user.qrDone[`qr${index + 1}`] = true;
        try {
            Log.logOptions(req.user.firstname, req.user.lastname, "qr" + "" + (index + 1), req.user.starCount());
        } catch (e) {
            console.log(e)
        }
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