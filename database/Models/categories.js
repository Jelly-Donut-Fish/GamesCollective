const { pool } = require('../index');
const category = require('./category_query');

const get = function () {
// Returns a list of all the categories.
  return pool.query(category.getAllCategories)
};

module.exports = {
  get,
};
