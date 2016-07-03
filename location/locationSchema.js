// Load required packages
var mongoose = require('mongoose');

// Define our movie schema
var Location   = new mongoose.Schema({
    name: String,
    address: String,
    description: String,
    price: Number,
    priceType: String,
    capacity: Number,
    picture: String,
    latitude: Number,
    longitude: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

// Export the Mongoose model
module.exports = mongoose.model('Location', Location);