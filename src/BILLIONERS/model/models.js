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
        type: mongoose.Schema.Types.Decimal128, // Use Decimal128 for floating point numbers
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
