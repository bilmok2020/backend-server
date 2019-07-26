const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    firstname: String,
    lastname: String,
    //authorities: 0=user , 1=admin
    authority: {
        type: Number,
        default: 0
    },
    //User's ban status
    banned: {
        type: Boolean,
        default: false
    },
    qrDone: {
        qr1: {
            type: Boolean,
            default: false
        },
        qr2: {
            type: Boolean,
            default: false
        },
        qr3: {
            type: Boolean,
            default: false
        }

    },
    game: {
        gameDone: {
            type: Boolean,
            default: false,
        },
        easterEgg: {
            type: Boolean,
            default: false,
        },
        highScore: {
            type: Number,
            default: 0
        }
    },
    starCount: {
        type: Number,
        default: 0
    }

})







// User Class
class UserClass {

    static async findByUsername(username) {
        let result = await this.findOne({
            username: username
        });
        if (result)
            return result;
        else
            return false;

    }
}

userSchema.loadClass(UserClass);
//


//Schema methods
//User's fullname
userSchema.method('fullName', function () {
    return this.firstname + " " + this.lastname;
})
//User's username and highscore
userSchema.method('userHighScore', function () {
    return this.username + " : " + this.game.highScore;
})

//User's star count.
userSchema.method('userStarCount', function () {
    var qrcount = 3;
    var starcount = 0;
    //check if game complated.
    if (this.game.gameDone)
        starcount += 1;
    if (this.game.easteregg)
        starcount += 1;
    //checking for every qrcode.
    for (var qrNumber = 0; qrNumber < qrcount; qrNumber++) {
        if (this.qrDone[`qr${qrNumber + 1}`])
            starcount += 1;
    }
    return starcount;
})

//


const User = mongoose.model('User', userSchema);

module.exports = User;