const gamesModel = require('../../database/Models/games');

const getAll = function(req, res) get{
  // call models getAll
}

const getOne = function(req, res) get{
  const {game_id} = req.params;
  // send to models
}

module.exports = {
  getAll: getAll,
  getOne: getOne
}