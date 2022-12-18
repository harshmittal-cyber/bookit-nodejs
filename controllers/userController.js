const User = require('../models/userSchema');
const ErrorHandler = require('../services/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');


exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const { email, phone, name } = req.body;

    if (!email || !phone || !name) return next(new ErrorHandler("All Fields required", 400))


})
