const { pool } = require('../index');
const platform = require('./platform_query');

const get = function () {
// Returns a list of all the platforms.
  return pool.query(platform.getAllPlatforms)
}

module.exports = {
  get: get
}