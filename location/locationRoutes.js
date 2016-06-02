/**
 * Created by Pat on 01.06.2016.
 */
module.exports = locationRoutes;


function locationRoutes(/*passport*/) {

    var locationController = require('./locationController');
    var router = require('express').Router();
    var unless = require('express-unless');

    /*var mw = passport.authenticate('jwt', {session: false});
    mw.unless = unless;
*/
    //middleware
    //router.use(mw.unless({method: ['GET', 'OPTIONS']}));

    router.route('/locations')
        .post(locationController.postLocation)
        .get(locationController.getLocations);

    router.route('/locations/:location_id')
        .get(locationController.getLocation)

        .put(locationController.putLocation)
        .delete(locationController.deleteLocation);

    return router;
}