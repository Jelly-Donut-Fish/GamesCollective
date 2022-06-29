const { pool } = require('../index');

const getAll = function (page, count) {
  // Will return a list of all the games that match the search parameters,
  // including the full information for every game.
}

const getOne = function (game_id) {
  //Will return information for a single game.
}

module.exports = {
  getAll,
  getOne,
};
