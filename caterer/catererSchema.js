// Load required packages
var mongoose = require('mongoose');

// Define our movie schema
var Caterer   = new mongoose.Schema({
    name: String,
    description: String,
    pricePerPerson: Number,
    kitchen: String,
    selection: String,
    vein: String,
    picture: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

// Export the Mongoose model
module.exports = mongoose.model('Caterer', Caterer);