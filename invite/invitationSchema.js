
// Load required packages
var mongoose = require('mongoose');

// Define our movie schema
var Invitation   = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    priceType: String,
    salutation: String,
    text: String,
    greeting: String,
    pattern: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

// Export the Mongoose model
module.exports = mongoose.model('Invitation', Invitation);