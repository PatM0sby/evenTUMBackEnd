/**
 * Created by Pat on 01.07.2016.
 */

var Event= require('./eventSchema');
//TODO add authentication & filters
exports.postEvent = function(req, res) {

    var event = new Event(req.body);



    event.save(function(err, m) {
        if (err) {
            res.status(500).send(err);
            return;
        }

        res.status(201).json(m);
    });
};

// Create endpoint /api/movies for GET
exports.getEvents = function(req, res) {
    Event.find(function(err, events) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(events);
    });
};


// Create endpoint /api/movies/:movie_id for GET
exports.getEvent = function(req, res) {
    // Use the Beer model to find a specific beer
    Event.findById(req.params.event_id, function(err, event) {
        if (err) {
            res.status(500).send(err)
            return;
        };

        res.json(event);
    });
};


exports.putEvent = function(req, res) {

   Event.findByIdAndUpdate(
        req.params.event_id,
        req.body,
        {
            //pass the new object to cb function
            new: true,
            //run validations
            runValidators: true
        }, function (err, event) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.json(event);
        });

};

// Create endpoint /api/movies/:movie_id for DELETE
exports.deleteEvent = function(req, res) {
    //step1: delete
    Event.findById(req.params.event_id, function (err, m) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        m.remove();
        console.log("deleted: " + m.name);

    });

    //step2: return remaining events (intended as far as i can remember)
    Event.find(function(err, events) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(events);
    });
}


