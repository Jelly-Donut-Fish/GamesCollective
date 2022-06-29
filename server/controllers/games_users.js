const gameUsersModel = require('../../database/Models/games_users');

const get = function (req, res) {
  let { user_id } = req.params;
  gameUsersModel.getAll(user_id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err.message)
    })
}

const post = function (req, res) {
  let { user_id } = req.params;
  gameUsersModel.post(user_id)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.send(err.message)
    })
}

const putStatus = function (req, res) {
  gameUsersModel.putStatus()
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      res.send(err.message)
    })
}

const putRatings = function (req, res) {
  gameUsersModel.putRatings(req.body)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      res.send(err.message)
    })
}

const deleteGame = function (req, res) {
  let { user_id, game_id } = req.params;
  gameUsersModel.deleteGame(user_id, game_id)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      res.send(err.message)
    })
}

module.exports = {
  get: get,
  post: post,
  putStatus: putStatus,
  putRatings: putRatings,
  deleteGame: deleteGame
}