// Load required packages
var mongoose = require('mongoose');

// Define our movie schema
var Caterer   = new mongoose.Schema({
    name: String,
    address: String,
    description: String,
    price: Number,
    priceType: String,
    kitchen: String,
    selection: String,
    vein: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

// Export the Mongoose model
module.exports = mongoose.model('Caterer', Caterer);