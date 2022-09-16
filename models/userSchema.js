const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    }

}, {
    timestamps: true
})

//JWT Token
userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_USER_SECRET, {
        expiresIn: process.env.JWT_USER_EXPIRE
    })
}


const user = mongoose.model('User', userSchema);

module.exports = user