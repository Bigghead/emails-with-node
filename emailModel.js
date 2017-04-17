const mongoose = require('mongoose');

const emailSchema = mongoose.Schema({
    sender: String, //sender email
    receiver: String, //your email
    title: String, //subject
    content: String,
    refEmail : [
        { 
            type: mongoose.Schema.Types.ObjectId , 
            ref: 'Email'
        }
    ],
    Date: {
        type: Date ,
        default: Date.now
    },
    attachmentID: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Attachment'
        }
    ],
    received: Boolean,
    sent: Boolean
});

const Email = mongoose.model('Email', emailSchema);

module.exports = Email;