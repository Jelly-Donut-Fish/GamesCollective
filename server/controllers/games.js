/* eslint-disable camelcase */
const gamesModel = require('../../database/Models/games');

const getAll = (req, res) => {
  const { page, count, q } = req.query;
  gamesModel.getAll(page, count, q)
    .then((data) => {
      res.send(data.rows[0].results);
    })
    .catch((err) => {
      res.send(err.message);
    });
};

const getOne = (req, res) => {
  const { game_id } = req.params;
  gamesModel.getOne(game_id)
    .then((data) => {
      res.send(data.rows[0]);
    })
    .catch((err) => {
      res.send(err.message);
    });
};

module.exports = {
  getAll,
  getOne,
};
