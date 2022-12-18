const Admin = require('../models/adminSchema');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');

exports.register = catchAsyncErrors(async (req, res) => {
    const { email, password } = req.body;

    const user = await Admin.create(req.body);
    user.save();
    return res.status(201).json({
        message: 'admin created successfully',
        admin: user,
        success: true
    })
})


exports.login = catchAsyncErrors(async (req, res) => {
    const user = await Admin.findOne({ email: req.body.email });
    if (user) {
        const token = await user.getJWTToken();
        return res.status(200).json({
            message: 'user login successfully',
            admin: user,
            token,
            success: true
        })
    } else {
        return res.status(401).json({
            message: 'user not login successfully',
            success: false
        })
    }

})