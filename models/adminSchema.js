const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email Field is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Password"],
    }


}, {
    timestamps: true
})

//JWT Token
adminSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_USER_SECRET, {
        expiresIn: process.env.JWT_USER_EXPIRE
    })
}


module.exports = mongoose.model('admin', adminSchema);
