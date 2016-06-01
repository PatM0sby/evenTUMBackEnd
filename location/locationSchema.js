/**
 * Created by Pat on 01.06.2016.
 */
// Load required packages
var mongoose = require('mongoose');

// Define our movie schema
var Location   = new mongoose.Schema({
    name: String,
    description: String,
    address: String,
    capacity: Number,
    price: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

// Export the Mongoose model
module.exports = mongoose.model('Location', Location);