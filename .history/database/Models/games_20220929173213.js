const { pool } = require('../index');
const game = require('./game_query');

const getAll = function(page = 1, count = 5, query = '') {
 // Will return a list of all the games that match the search parameters,
 // including the full information for every game.
  return pool.query(game.getAllGames, [page, count, query])
}

const getOne = function(game_id) {
 //Will return information for a single game.
  return pool.query(game.getGame, [game_id])
}

module.exports = {
  getAll,
  getOne,
};
