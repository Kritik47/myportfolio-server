const mongoose = require('mongoose');

const BillionerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number, 
        required: true
    },
    company: {
        type: String,
        required: true
    },
    networth: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
});

const Billioner = mongoose.model("Billioner", BillionerSchema);
module.exports = Billioner;
