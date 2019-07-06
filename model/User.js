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
    authority: Number,
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
        highScore: {
            type: Number,
            default: 0
        }
    },

})





// User Class
class UserClass {

    static async  findByUsername(username) {
        let result = await this.findOne({ username: username });
        if (result)
            return result;
        else
            return false;

    }
}

userSchema.loadClass(UserClass);
//


//Schema methods
userSchema.method('fullName', function () {
    return this.firstname + " " + this.lastname;
})

userSchema.method('userHighScore', function () {
    return this.username + " : " + this.game.highScore;
})

//


const User = mongoose.model('User', userSchema);

module.exports = User;



