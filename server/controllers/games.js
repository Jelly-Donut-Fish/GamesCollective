const gamesModel = require('../../database/Models/games');

const getAll = function (req, res) {
  const { page, count, q } = req.query;
  console.log(req.query);
  gamesModel.getAll(page, count, q)
    .then((data) => {
      res.send(data.rows[0].results);
    })
    .catch((err) => {
      res.send(err.message)
    })
}

const getOne = function (req, res) {
  let { game_id } = req.params;
  gamesModel.getOne(game_id)
    .then((data) => {
      res.send(data.rows[0]);
    })
    .catch((err) => {
      res.send(err.message)
    })
}

module.exports = {
  getAll: getAll,
  getOne: getOne
}