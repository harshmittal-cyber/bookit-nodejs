const ErrorHandler = require('../services/errorHandler');

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    err.message = err.message || "Internal Server Error"
    //wrong mongodb id error
    if (err.name === 'CastError') {
        const message = `Resource not found.InValid: ${err.path}`
        err = new ErrorHandler(message, 400)
    }

    //mongoose duplicate key error
    if (err.code === 11000) {
        const message = `${Object.keys(err.keyValue)} Already Exist`
        err = new ErrorHandler(message, 400)
    }

    //json web token error
    if (err.name === "JsonWebTokenError") {
        const message = `Json Web Token is invalid,try again`
        err = new ErrorHandler(message, 400)
    }

    //JWT EXPIRE ERROR
    if (err.name === "TokenExpiredError") {
        const message = `Json Web Token is Expired,Try again`
        err = new ErrorHandler(message, 400)
    }
    res.status(err.statusCode).json({
        success: false,
        message: err.message
    })
}