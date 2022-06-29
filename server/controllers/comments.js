const commentsModel = require('../../database/Models/comments');

const get = function (req, res) {
  let { game_id } = req.params;
  commentsModel.get(game_id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err.message)
    })
}

const post = function (req, res) {
  commentsModel.post(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.send(err.message)
    })
}

const put = function (req, res) {
  let { comment_id } = req.params;
  commentsModel.put(comment_id)
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
  put: put
}