const userModel = require('../../database/models/users');

const get = function (req, res) {
  userModel.get(req.query, res);
};

const post = function (req, res) {
  userModel.post(req.body, res);
};

const put = function (req, res) {
  userModel.put(req.body, res);
};

module.exports = {
  get: get,
  post: post,
  put: put
}