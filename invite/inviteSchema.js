/**
 * Created by Pat on 15.06.2016.
 */
/**
 * Created by Pat on 01.06.2016.
 */
// Load required packages
var mongoose = require('mongoose');

// Define our movie schema
var Invite   = new mongoose.Schema({
    name: String,
    description: String,
    address: String,
    pricePerPerson: Number,
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
module.exports = mongoose.model('Invitation', Invite);