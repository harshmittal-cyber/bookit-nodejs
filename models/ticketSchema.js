const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({
    city: {
        type: String
    },
    count_abroad: {
        type: String
    },
    count_adult: {
        type: String
    },
    count_children: {
        type: String
    },
    date: {
        type: String
    },
    doc_type: {
        type: String
    },
    emailID: {
        type: String
    },
    monument: {
        type: String
    },
    name: {
        type: String
    },
    personal_id_no: {
        type: String
    },
    phone: {
        type: String
    },
    price_abroad: {
        type: String
    },
    price_adult: {
        type: String
    },
    price_children: {
        type: String
    },
})



module.exports = mongoose.model('ticket', ticketSchema)