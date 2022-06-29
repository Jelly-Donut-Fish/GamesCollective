const commentsModel = require('../../database/Models/comments');

const get = function (req, res) {
  let { game_id } = req.params;
  commentsModel.get(game_id)
    .then((data) => {
      res.send(data.rows[0].results);
    })
    .catch((err) => {
      res.send(err.message)
    })
}

const post = function (req, res) {
  if (!req.body.title) {
    req.body.title = '';
  }
  if (!req.body.image_url) {
    req.body.image_url = '';
  }
  if (!req.body.parent_comment_id) {
    req.body.parent_comment_id = 0;
  }
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