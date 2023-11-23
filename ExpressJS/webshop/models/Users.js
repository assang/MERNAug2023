const mongoose = require("mongoose");
const pbkdf2 = require("pbkdf2");
const crypto = require("crypto");

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password_hash: {
        type: String,
        required: true
    },
})

UserSchema.methods.createHash = async function(plainTextPassword){
    let salt = crypto.randomBytes(16).toString('hex')
    // jhbguguery874thi5y948493w
    // password, salt -> pbkdf2 -> hashed password
    const hashedPassword = pbkdf2
    .pbkdf2Sync(plainTextPassword,salt, 10, 32, 'sha512').toString("hex");

    console.log("hashedPassword: ", hashedPassword)
    return [salt, hashedPassword].join("#");

} 

UserSchema.methods.validatePassword = async function(candidatePassword) {
    const hashedPassword = this.password_hash.split('#')[1]
    const salt = this.password_hash.split('#')[0]

    const hash = pbkdf2
    .pbkdf2Sync(candidatePassword,salt, 10, 32, 'sha512').toString("hex");

    if(hash == hashedPassword) {
        return true
    } else {
        return false
    }
}

module.exports.User = mongoose.model("User", UserSchema);