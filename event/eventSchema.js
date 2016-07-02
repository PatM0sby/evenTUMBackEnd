/**
 * Created by Pat on 01.07.2016.
 */
var mongoose = require('mongoose');

var Event   = new mongoose.Schema({
    name: String,
    date: String,
    memberCount: Number,
    location: String,
    caterer: String,
    token: String,

    invitation: {
        template: String,
        invitees: Array
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

// Export the Mongoose model
module.exports = mongoose.model('Event', Event);