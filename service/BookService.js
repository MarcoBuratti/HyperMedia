'use strict';

let db;
const knex = require('../db/knex');

/**
 * Books available in the inventory
 * List of books available in the inventory
 *
 * offset Integer Pagination offset. Default is 0. (optional)
 * limit Integer Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)
 * returns List
 **/
exports.booksGET = function (offset, limit) {
  return new Promise(function (resolve, reject) {
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

/**
 * bookId Long ID of book to return
 * returns Book
 **/
exports.getBookById = function (bookId) {
  knex.select()
    .from('books')
    .where('id', bookId)
    .then(function (book) {
      console.log("Selected ID Book is: " + bookId);
      console.log(book);
      return book;
    })
}

exports.booksDbSetup = function (database) {
  db = database;
  console.log("Check if book table exist");
  return db.schema.hasTable("books").then(exists => {
    if (!exists) {
      console.log("It doesn't");
    } else {
      console.log("DbBook Exists: " + exists);
    }
  });
}