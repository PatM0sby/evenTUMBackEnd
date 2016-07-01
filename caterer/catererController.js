var Caterer = require('./catererSchema');

exports.postCaterer = function(req, res) {

    var caterer = new Caterer(req.body);

    /*
    //do not allow user to fake identity. The user who posted the movie must be the same user that is logged in
    if (!req.user.equals(movie.user)) {
        res.sendStatus(401);
    } */

    caterer.save(function(err, m) {
        if (err) {
            res.status(500).send(err);
            return;
        }

        res.status(201).json(m);
    });
};

// Create endpoint /api/movies for GET
exports.getCaterers = function(req, res) {
    Caterer.find(function(err, caterers) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(caterers);
    });
};


// Create endpoint /api/movies/:movie_id for GET
exports.getCaterer = function(req, res) {
    // Use the Beer model to find a specific beer
    Caterer.findById(req.params.caterer_id, function(err, caterer) {
        if (err) {
            res.status(500).send(err)
            return;
        };

        res.json(caterer);
    });
};

// Create endpoint /api/movies/:movie_id for PUT
exports.putCaterer = function(req, res) {
    // Use the Beer model to find a specific beer
    Caterer.findByIdAndUpdate(
        req.params.caterer_id,
        req.body,
        {
            //pass the new object to cb function
            new: true,
            //run validations
            runValidators: true
        }, function (err, caterer) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(caterer);
    });

};

// Create endpoint /api/movies/:movie_id for DELETE
exports.deleteCaterer = function(req, res) {
    // Use the Beer model to find a specific beer and remove it
    Caterer.findById(req.params.caterer_id, function(err, m) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        //authorize
        
         m.remove();
        console.log('removed: '+ m._id);
         res.sendStatus(200);
        /*
        if (m.user && req.user.equals(m.user)) {
            m.remove();
            res.sendStatus(200);
        } else {
            res.sendStatus(401);
        }
        */
    });
};