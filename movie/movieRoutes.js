//module.exports = movieRoutes;

/*
function movieRoutes(passport) {

    var movieController = require('./movieController');
    var router = require('express').Router();
    var unless = require('express-unless');

    var mw = passport.authenticate('jwt', {session: false});
    mw.unless = unless;

    //middleware
    router.use(mw.unless({method: ['GET', 'OPTIONS']}));

    router.route('/movies')
        .post(movieController.postMovie)
        .get(movieController.getMovies);

    router.route('/movies/:movie_id')
        .get(movieController.getMovie)
        .put(movieController.putMovie)
        .delete(movieController.deleteCaterer);

    return router;
}
*/