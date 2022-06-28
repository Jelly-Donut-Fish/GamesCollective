const gamesModel = require('../../database/Models/games');

const getAll = function(req, res) {
  let {page, count, q, genre, platform, game_library} = req.params;
  gamesModel.getAll(page, count, q, genre, platform, game_library)
  .then(() => {

  })
  .catch(() => {

  })
}

const getOne = function(req, res) {
  let {game_id} = req.params;
  gamesModel.getOne(game_id)
  .then(() => {

  })
  .catch(() => {

  })
}

module.exports = {
  getAll: getAll,
  getOne: getOne
}