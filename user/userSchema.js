var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', function(callback) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return callback();

    bcrypt.genSalt(10, function(err, salt) {
        if (err) return callback(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, null, function (err, hash) {
            if (err) return callback(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            callback();
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return callback(err);
        callback(null, isMatch);
    });
};


var User = mongoose.model('User', userSchema);

module.exports = User;