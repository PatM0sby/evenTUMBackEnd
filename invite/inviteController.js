/**
 * Created by Pat on 15.06.2016.
 */
var Invite = require('./inviteSchema');

exports.postInvite = function(req, res) {

    var invite = new Invite(req.body);

    /*
     //do not allow user to fake identity. The user who postet the movie must be the same user that is logged in
     if (!req.user.equals(movie.user)) {
     res.sendStatus(401);
     } */

    invite.save(function(err, m) {
        if (err) {
            res.status(500).send(err);
            return;
        }

        res.status(201).json(m);
    });
};

// Create endpoint /api/movies for GET
exports.getInvites = function(req, res) {
    Invite.find(function(err, invites) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(invites);
    });
};


// Create endpoint /api/movies/:movie_id for GET
exports.getInvite = function(req, res) {
    // Use the Beer model to find a specific beer
    Invite.findById(req.params.invite_id, function(err, invite) {
        if (err) {
            res.status(500).send(err)
            return;
        };

        res.json(invite);
    });
};

// Create endpoint /api/movies/:movie_id for PUT
exports.putInvite = function(req, res) {
    // Use the Beer model to find a specific beer
    Invite.findByIdAndUpdate(
        req.params.invite_id,
        req.body,
        {
            //pass the new object to cb function
            new: true,
            //run validations
            runValidators: true
        }, function (err, invite) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.json(invite);
        });

};

// Create endpoint /api/movies/:movie_id for DELETE
exports.deleteInvite = function(req, res) {
    // Use the Beer model to find a specific beer and remove it
    Invite.findById(req.params.invite_id, function(err, m) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        //authorize/
        /*if (m.user && req.user.equals(m.user)) {
            m.remove();
            res.sendStatus(200);
        } else {
            res.sendStatus(401);
        }*/

    });
};
