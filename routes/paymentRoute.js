const { Router } = require('express');
const express = require('express');
const { createPayment, verifyPayment } = require('../controllers/paymentController');
const { createTicket, getTicket } = require('../controllers/ticketController');

const router = express.Router();

router.post('/createpayment', createPayment);
router.post('/verifypayment', verifyPayment)
router.post('/createTicket', createTicket)
router.post('/getTicket', getTicket);

module.exports = router;