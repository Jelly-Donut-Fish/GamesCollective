const gameUsersModel = require('../../database/Models/games');

const getAll = function (req, res) {
  let { user_id } = req.params;
  gameUsersModel.getAll(user_id)
    .then(() => {

    })
    .catch(() => {

    })
}

const post = function (req, res) {
  let { user_id } = req.params;
  gameUsersModel.post(user_id)
    .then(() => {

    })
    .catch(() => {

    })
}

const putStatus = function (req, res) {
  gameUsersModel.putStatus()
    .then(() => {

    })
    .catch(() => {

    })
}

const putRatings = function (req, res) {
  gameUsersModel.putRatings(req.body)
  .then(() => {

  })
  .catch(() => {

  })
}

const deleteGame = function (req, res) {
  let {user_id, game_id} = req.params;
  gameUsersModel.deleteGame(user_id, game_id)
  .then(() => {

  })
  .catch(() => {

  })
}

module.exports = {
  getAll: getAll,
  post: post,
  putStatus: putStatus,
  putRatings: putRatings,
  deleteGame: deleteGame
}