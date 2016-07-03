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

exports.getInvitations = function(req, res) {
    Invitation.find(function(err, invitations) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(invitations);
    });
};



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

exports.deleteInvitation = function(req, res) {
    Invitation.findById(req.params.invitation_id, function(err, inv) {
        if (err) {
            res.status(206).send(err);
            return;
        }

        inv.remove()
            .then(function () {
                res.status(200).json(inv);

                console.log("deleted: " + inv.name);
            })
            .catch(function (e) {
                res.status(206).json({
                    message: 'Object could not be removed!',
                    error: e
                });
            });
    });
};
