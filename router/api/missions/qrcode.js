const express = require('express');
const router = express.Router();
const auth = require('../../../middleware/auth');
const {
    postQrcodeController
} = require('../../../controller/api/missions/qrcode')

router.post('/', auth, postQrcodeController);


module.exports = router;