/**
 * Created by Pat on 01.07.2016.
 */
module.exports = eventRoutes;


function eventRoutes(/*passport*/) {

    var eventController = require('./eventController');
    var router = require('express').Router();
    var unless = require('express-unless');

    
    router.route('/events')
        .post(eventController.postEvent)
        .get(eventController.getEvents);

    router.route('/events/:event_id')
        .get(eventController.getEvent)
        .put(eventController.putEvent)
        .delete(eventController.deleteEvent);

    return router;
}

