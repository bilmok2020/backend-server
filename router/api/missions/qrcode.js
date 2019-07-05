const express = require('express');
const router = express.Router();
const auth = require('../../../middleware/auth');
const {
    postQrcodeController
} = require('../../../controller/api/missions/qrcode')

<<<<<<< HEAD
router.post('/', auth, postQrcodeController);
=======
router.post('/', auth, async (req, res) => {
    let scannedQrString = req.body.scannedQrString;
    let index = verifyQrCode(scannedQrString);
    console.log(index, req.user);
    if (index !== false) {

        req.user.qrDone[`qr${index + 1}`] = true;
        await req.user.save();
        /**
         * TODO : Onaylanmış qr kodunu database'e aktarma 
         * hint : req.user ile hangi kullanıcının datasına ulaşacağımızı elde ediyoruz.
         */
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
});
>>>>>>> 81ce4bedd260403818bfe0d3ce7fd05cfbb64081


module.exports = router;