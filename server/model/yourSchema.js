const mongoose = require('mongoose');

const yourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'why no name']
    },
    age: {
        type: Number,
        required: true
    },
    phno: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

const yourData = mongoose.model('yourData', yourSchema);

module.exports = yourData;