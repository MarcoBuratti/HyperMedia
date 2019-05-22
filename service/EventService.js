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
  return new Promise(function (resolve, rejected) {
    var sql = knex.select()
      .from('events')
      .where('id', offset)
    if (Object.keys(sql).length > 0) {
      console.log(sql);
      resolve(sql[Object.keys(sql)]);
    } else {
      resolve();
    }
  })
}

