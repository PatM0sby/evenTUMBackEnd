/**
 * Created by Pat on 15.06.2016.
 */
var Invitation = require('./invitationSchema');

exports.postInvitation = function(req, res) {

    var invitation = new Invitation(req.body);

    /*
     //do not allow user to fake identity. The user who postet the movie must be the same user that is logged in
     if (!req.user.equals(movie.user)) {
     res.sendStatus(401);
     } */

    invitation.save(function(err, m) {
        if (err) {
            res.status(500).send(err);
            return;
        }

        res.status(201).json(m);
    });
};

// Create endpoint /api/movies for GET
exports.getInvitations = function(req, res) {
    Invitation.find(function(err, invitations) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(invitations);
    });
};


// Create endpoint /api/movies/:movie_id for GET
exports.getInvitation = function(req, res) {
    // Use the Beer model to find a specific beer
    Invitation.findById(req.params.invitation_id, function(err, invitation) {
        if (err) {
            res.status(500).send(err)
            return;
        };

        res.json(invitation);
    });
};

// Create endpoint /api/movies/:movie_id for PUT
exports.putInvitation = function(req, res) {
    // Use the Beer model to find a specific beer
    Invitation.findByIdAndUpdate(
        req.params.invitation_id,
        req.body,
        {
            //pass the new object to cb function
            new: true,
            //run validations
            runValidators: true
        }, function (err, invitation) {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.json(invitation);
        });

};

// Create endpoint /api/movies/:movie_id for DELETE
exports.deleteInvitation = function(req, res) {
    // Use the Beer model to find a specific beer and remove it
    Invitation.findById(req.params.invitation_id, function(err, m) {
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
