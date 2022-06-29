const { pool } = require('../index');
const genre = require('./genre_query');

const get = function() {
// Returns a list of all the genres.
  return pool.query(genre.getAllGenres)
}

module.exports = {
  get,
};
