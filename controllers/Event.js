'use strict';

var utils = require('../utils/writer.js');
var Event = require('../service/EventService');

module.exports.eventsGET = function eventsGET (req, res, next) {
  Event.eventsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEventById = function getEventById(req, res, next) {
  var eventId = req.swagger.params['eventId'].value;
  Event.getEventById(eventId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEventByMonth = function getEventByMonth(req, res, next) {
  var month = req.swagger.params['month'].value;
  var year = req.swagger.params['year'].value;
  Event.getEventByMonth(month,year)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
