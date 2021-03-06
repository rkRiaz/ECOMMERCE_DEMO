const { Schema, model } = require('mongoose')

const CustomerSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    email: {
        type: 'String',
        trim: true,
    },
    address: {
        type: String,
        require: true,
        trim: true
    }
 
}, {timestamps: true})

const Customer = model('Customer', CustomerSchema)
module.exports = Customer