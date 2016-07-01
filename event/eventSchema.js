/**
 * Created by Pat on 01.07.2016.
 */
var mongoose= require('mongoose');

var Event   = new mongoose.Schema({
    name: String,
    date: String,
    membercount: Number,
    
    location: {name: String,
    description: String,
    address: String,
    capacity: Number,
    price: Number,
    picture: String,
    latitude: Number,
    longitude: Number,
    },
    
    caterer: {
    name: String,
    description: String,
    pricePerPerson: Number,
    kitchen: String,
    selection: String,
    vein: String,
    picture: String,
    },
    
    invitation: {name: String,
        description: String,
        pricePerPerson: Number,
        salutation: String,
        text: String,
        greeting: String,
        pattern: String,
        },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
    

});

// Export the Mongoose model
module.exports = mongoose.model('Event', Event);