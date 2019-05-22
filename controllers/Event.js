'use strict';

var utils = require('../utils/writer.js');
var Event = require('../service/EventService');

module.exports.eventsGET = function eventsGET (req, res, next) {
  var offset = req.swagger.params['offset'].value;
  Event.eventsGET(offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
