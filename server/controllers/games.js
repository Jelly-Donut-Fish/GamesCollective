const gamesModel = require('../../database/Models/games');

const getAll = function (req, res) {
  let { page, count } = req.params;
  gamesModel.getAll(page, count)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err.message)
    })
}

const getOne = function (req, res) {
  let { game_id } = req.params;
  gamesModel.getOne(game_id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err.message)
    })
}

module.exports = {
  getAll: getAll,
  getOne: getOne
}