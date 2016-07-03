var Config = require('../config/config');
var Event= require('./eventSchema');
var jwt = require('jwt-simple');

//TODO add authentication & filters
exports.postEvent = function(req, res) {
    var event = new Event(req.body);

    event.save(function(err, event) {
        if (err) {
            res.status(206).send(err);
            return;
        }

        res.status(201).json(event);
    });
};

exports.getEvents = function(req, res) {
    var user = jwt.decode(req.headers.authorization.split('JWT ')[1], Config.auth.jwtSecret).user;
    var userId = user._id;

    Event.find({user: userId})
        .find(function(err, events) {
            if (err) {
                res.status(206).send(err);
                return;
            }

            res.status(200).json(events);
        });
};


exports.getEvent = function(req, res) {
    Event.findById(req.params.event_id, function(err, event) {
        if (err) {
            res.status(206).send(err);
            return;
        }

        res.status(200).json(event);
    });
};


exports.putEvent = function(req, res) {
    var id = req.params.event_id,
        update = req.body,
        config = { new: true, runValidators: true };

    var callback = function (err, event) {
        if (err) {
            res.status(206).send(err);
            return;
        }
        res.status(200).json(event);
    };

    Event.findByIdAndUpdate(id, update, config, callback);

};

exports.deleteEvent = function(req, res) {
    Event.findById(req.params.event_id, function (err, event) {
        if (err) {
            res.status(206).send(err);
            return;
        }

        console.log("deleted: " + event.name);

        event.remove()
            .then(function () {
                res.status(200).json(event);
            })
            .catch(function (e) {
                res.status(206).json({
                    message: 'Object could not be removed!',
                    error: e
                });
            });
    });
};


