'use strict';
let db;


exports.eventDbSetup = function (database) {
  db = database;
  return db.schema.hasTable("events").then(exists => {
    if (!exists) {
      console.log("It doesn't");
    } else {
      console.log("DbEvents Exists");
    }
  });
}

/**
 * Events in sponsord
 *
 * offset Integer Pagination offset (optional)
 * returns List
 **/
exports.eventsGET = function (offset) {
  return db.select()
      .from('events');
}


exports.getEventById = function (eventId) {
  return db.select()
    .from('events')
    .where('id_event', eventId);
}


exports.getEventByName = function (eventName) {
  eventName = '%' + eventName + '%';
  return db.select()
  .from('events')
  .where('name', 'like', eventName);
}

exports.getEventByMonth = function (eventMonth) {
  eventMonth = '%/' + eventMonth + '/%';
  return db.select()
  .from('events')
  .where('date', 'like', eventMonth);
}