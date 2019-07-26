const express = require('express');
const router = express.Router();

router.use('/qrcode', require('./qrcode'));
router.use('/game', require('./game'));

module.exports = router;