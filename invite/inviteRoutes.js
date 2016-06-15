/**
 * Created by Pat on 15.06.2016.
 */

module.exports = inviteRoutes;


function inviteRoutes(/*passport*/) {

    var inviteController = require('./inviteController');
    var router = require('express').Router();
    var unless = require('express-unless');

    /*var mw = passport.authenticate('jwt', {session: false});
     mw.unless = unless;
     */
    //middleware
    //router.use(mw.unless({method: ['GET', 'OPTIONS']}));

    router.route('/invitations')
        .post(inviteController.postInvite)
        .get(inviteController.getInvites);

    router.route('/invitations/:invite_id')
        .get(inviteController.getInvite)
        .put(inviteController.putInvite)
        .delete(inviteController.deleteInvite);

    return router;
}
