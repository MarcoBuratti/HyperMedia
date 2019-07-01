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


exports.eventsGET = function () {
  return db.join('books','books.isbn','=','events.isbn').select('name','title','id_event','events.date','events.isbn')
      .from('events');
}


exports.getEventById = function (eventId) {
  return db.join('books','books.isbn','=','events.isbn').select('name','title','id_event','events.date','events.isbn','description')
    .from('events')
    .where('id_event', eventId);
}


exports.getEventByIsbn = function (isbn) {
  return db.select('id_event','name')
    .from('events')
    .where('isbn', isbn);
}


exports.getEventByMonth = function (month,year) {
  
  var date = '%/' + month + '/'+ year+'%';
  return db.join('books','books.isbn','=','events.isbn').select('name','title','id_event','events.date','events.isbn')
  .from('events')
  .where('events.date', 'like', date);
}