'use strict';

var utils = require('../utils/writer.js');
var Author = require('../service/AuthorService');

module.exports.getAuthorById = function getAuthorById (req, res, next) {
  var authorID = req.swagger.params['authorID'].value;
  Author.getAuthorById(authorID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
