const mongoose = require('mongoose');

const yourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'why no name']
    },
    age: {
        type: Number,
        required: true,
        min:[0,"age should be of atleast 0"],
        max:[120, "age should be of not more than 120"]
        
    },
    phno: {
        type: Number,
        required: true,
        min:[1000000000,"phno should be of 10 digits"],
        max:[9999999999, "phno should be of 10 digits"]
    },
    email: {
        type: String,
        required: true
    }
})

const yourData = mongoose.model('yourData', yourSchema);

module.exports = yourData;