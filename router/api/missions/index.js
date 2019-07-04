const express = require('express');
const router = express.Router();

router.use('/qrcode', require('./qrcode'));

module.exports = router;