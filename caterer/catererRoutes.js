module.exports = catererRoutes;


function catererRoutes() {

    var catererController = require('./catererController');
    var router = require('express').Router();
    var unless = require('express-unless');

    //var mw = passport.authenticate('jwt', {session: false});
    //mw.unless = unless;

    //middleware
    //router.use(mw.unless({method: ['GET', 'OPTIONS']}));

    router.route('/caterer')
        .post(catererController.postCaterer)
        .get(catererController.getCaterers);

    router.route('/caterer/:caterer_id')
        .get(catererController.getCaterer)
        .put(catererController.putCaterer)
        .delete(catererController.deleteCaterer);

    return router;
}
