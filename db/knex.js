var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile.js')[environment];
//console.log(config);
module.exports = require('knex')(config);