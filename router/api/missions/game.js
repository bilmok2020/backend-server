const express = require('express');
const router = express.Router();
const auth = require('../../../middleware/auth');
const {
    postHighScoreUpdate
} = require('../../../controller/api/missions/game')

router.post('/', auth, postHighScoreUpdate);


module.exports = router;