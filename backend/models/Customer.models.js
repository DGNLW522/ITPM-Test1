const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const addcustomerSchema = new Schema({ 
    cname: {
        type: String,
        required: true,
        unique: true,        
        trim: true,
    },
    cemail: {
        type: String,
        required: true,
        unique: true,
    },
    caddress: {
        type: String,
        required: true,       
        trim: true, 
    },
    nic: {
        type: String,
        required: true,
        unique: true, 
        maxlength:12, 
        minlength:9, 
        trim: true,
    },
    gender: {
        type:String,
    },
    mobileno: { 
        type: String, 
        required: true, 
        maxlength:15, 
        minlength:10, 
        unique:true
       },
}, {
    timestamps: true,
})

const Addcustomer = mongoose.model("Addcustomer", addcustomerSchema);

module.exports = Addcustomer;