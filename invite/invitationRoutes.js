/**
 * Created by Pat on 15.06.2016.
 */

module.exports = invitationRoutes;


function invitationRoutes(/*passport*/) {

    var invitationController = require('./invitationController');
    var router = require('express').Router();
    var unless = require('express-unless');

    /*var mw = passport.authenticate('jwt', {session: false});
     mw.unless = unless;
     */
    //middleware
    //router.use(mw.unless({method: ['GET', 'OPTIONS']}));

    router.route('/invitations')
        .post(invitationController.postInvitation)
        .get(invitationController.getInvitations);

    router.route('/invitations/:invitation_id')
        .get(invitationController.getInvitation)
        .put(invitationController.putInvitation)
        .delete(invitationController.deleteInvitation);

    return router;
}
