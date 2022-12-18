const Ticket = require("../models/ticketSchema");
const ErrorHandler = require('../services/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const nodeMailer = require("nodemailer");


exports.createTicket = catchAsyncErrors(async (req, res, next) => {
    const ticket = await Ticket.create(req.body);
    await ticket.save();
    const ticketcount = parseInt(req.body.count_abroad) + parseInt(req.body.count_adult) + parseInt(req.body.count_children)

    return res.status(200).json({ message: 'Ticket Created Successfully', ticket, success: true })
})

exports.getTicket = catchAsyncErrors(async (req, res, next) => {
    const ticket = await Ticket.findOne({ _id: req.body.id });
    if (!ticket) {
        return res.status(400).json({ message: 'Ticket Not Found', success: false })
    } else {
        return res.status(200).json({ message: 'Ticket Verified', success: true })
    }
})