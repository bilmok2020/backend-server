const express = require('express');
const router = express.Router();
const auth = require('../../../middleware/auth');

const {
    verifyQrCode
} = require('../../../utils/verifyMissions');

router.post('/', auth, (req, res) => {
    let scannedQrString = req.body.scannedQrString;
    let index = verifyQrCode(scannedQrString);
    if (index) {
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


module.exports = router;