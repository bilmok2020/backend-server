const Log = require('../../../model/Log')
const User = require('../../../model/User')


const postHighScoreUpdate = async (req, res) => {

    req.user.game.highScore = req.body.userHighScore;
    if (req.user.game.highScore > 15 && !req.user.game.gameDone) {
        req.user.game.gameDone = true;

        req.user.starCount = req.user.userStarCount();
        console.log("içerideyim")
    }

    req.user.save();


};

module.exports = {
    postHighScoreUpdate
};