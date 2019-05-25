'use strict';

let db;

exports.booksDbSetup = function (database) {
  db = database;
  return db.schema.hasTable("books").then(exists => {
    if (!exists) {
      console.log("It doesn't");
    } else {
      console.log("DbBook Exists");
    }
  });
}
/**
 * Books available in the inventory
 * List of books available in the inventory
 *
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns List
 **/
exports.booksGET = function (offset, limit) {
  return db.select()
  .from('books');
}

/**
 * bookId Long ID of book to return
 * returns Book
 **/
exports.getBookById = function (bookId) {
  return db.select()
    .from('books')
    .where('isbn', bookId);
}
