'use strict';
const knex = require('../db/knex');

/**
 * Events in sponsord
 *
 * offset Integer Pagination offset (optional)
 * returns List
 **/
exports.eventsGET = function (offset) {
  knex.select()
    .from('events')
    .where('id', offset)
    .then(function (event) {
      console.log("Selected ID Event is: " + offset);
      console.log(event);
      return event.constructor();
    })
}

