'use strict';

var utils = require('../utils/writer.js');
var Author = require('../service/AuthorService');

module.exports.getAuthorById = function getAuthorById (req, res, next) {
  var authorID = req.swagger.params['id_author'].value;
  Author.getAuthorById(authorID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


module.exports.getAllAuthors = function getAllAuthors (req, res, next) {
  Author.getAllAuthors()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


module.exports.getBooksByIdAuthor = function getBooksByIdAuthor (req, res, next) {
  var authorID = req.swagger.params['authorId'].value;
  Author.getBooksByIdAuthor(authorID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAuthorsByIsbn = function getAuthorsByIsbn (req, res, next) {
  var authorID = req.swagger.params['isbn'].value;
  Author.getAuthorsByIsbn(authorID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};