/* eslint-disable camelcase */
const commentsModel = require('../../database/Models/comments');

const get = (req, res) => {
  const { game_id } = req.params;
  commentsModel.get(game_id)
    .then((data) => {
      res.send(data.rows[0].results);
    })
    .catch((err) => {
      res.send(err.message);
    });
};

const post = (req, res) => {
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
      res.send(err.message);
    });
};

const put = (req, res) => {
  const { comment_id } = req.params;
  commentsModel.put(comment_id)
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
  put,
};
