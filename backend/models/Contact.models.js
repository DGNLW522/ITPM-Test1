const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const addcontactSchema = new Schema({ 
    nate: {
        type: String, 
        required: true, 
        maxlength:15, 
        minlength:10, 
        unique:true
    },
    natn: {
        type: String, 
        required: true, 
        maxlength:15, 
        minlength:10, 
        unique:true
    },
    prte: {
        type: String, 
        required: true, 
        maxlength:15, 
        minlength:10, 
        unique:true
    },
    prtn: {
        type: String, 
        required: true, 
        maxlength:15, 
        minlength:10, 
        unique:true
    },
    rvote: {
        type: String, 
        required: true, 
        maxlength:15, 
        minlength:10, 
        unique:true
    },
    rvotn: { 
        type: String, 
        required: true, 
        maxlength:15, 
        minlength:10, 
        unique:true
    },
    bde: {
        type: String, 
        required: true, 
        maxlength:15, 
        minlength:10, 
        unique:true
    },
    bdn: {
        type: String, 
        required: true, 
        maxlength:15, 
        minlength:10, 
        unique:true
    },
}, {
    timestamps: true,
})

const Addcontact = mongoose.model("Addcontact", addcontactSchema);

module.exports = Addcontact;