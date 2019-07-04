const express = require('express');
const router = express.Router();
const auth = require('../../../middleware/auth');

router.get('/:id', auth, (req, res) => {
    res.send(req.user);
});

module.exports = router;