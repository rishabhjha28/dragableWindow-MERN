const mongoose = require('mongoose');

const countSchema = new mongoose.Schema({
    add: {
        type: Number
    },
    update: {
        type: Number
    }
})

const countData = mongoose.model('countData', countSchema);

module.exports = countData;