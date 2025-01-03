const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    user_id: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
    name: {type: String, required: [true, 'Please enter your name.']},
    email: {type: String, required: [true, 'Please enter your email.']},
    phone: {type: String, required: [true, 'Please enter your phone number.']}
}, {timestamps: true});

module.exports = mongoose.model('Contact', contactSchema);