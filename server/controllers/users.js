const userModel = require('../../database/models/users');

const get = function (req, res) {
  userModel.get(req.body)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.send(err.message);
    })
}

const post = function (req, res) {
  let { user_id } = req.params;
  userModel.post(user_id)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.send(err.message);
    })
}

const put = function (req, res) {
  userModel.put(req.body)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      res.send(err.message);
    })
}

module.exports = {
  get: get,
  post: post,
  put: put
}