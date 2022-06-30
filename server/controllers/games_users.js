/* eslint-disable camelcase */
const gameUsersModel = require('../../database/Models/games_users');

const get = (req, res) => {
  const { user_id } = req.params;
  gameUsersModel.get(user_id)
    .then((data) => {
      res.send(data.rows[0]);
    })
    .catch((err) => {
      res.send(err);
    });
};

const post = (req, res) => {
  const { user_id } = req.params;
  gameUsersModel.post(user_id, req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.send(err.message);
    });
};

const putStatus = (req, res) => {
  gameUsersModel.putStatus(req.body)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      res.send(err.message);
    });
};

const putRatings = (req, res) => {
  gameUsersModel.putRatings(req.body)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      res.send(err.message);
    });
};

const deleteGame = (req, res) => {
  const { game_id, user_id } = req.query;
  gameUsersModel.deleteGame(game_id, user_id)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      res.send(err.message);
    });
};

module.exports = {
  get,
  post,
  putStatus,
  putRatings,
  deleteGame,
};
