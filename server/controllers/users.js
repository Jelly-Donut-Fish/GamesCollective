const userModel = require('../../database/Models/users');

const get = (req, res) => {
  userModel.get(req.query, res);
};

const post = (req, res) => {
  userModel.post(req.body, res);
};

const put = (req, res) => {
  userModel.put(req.body, res);
};

module.exports = {
  get,
  post,
  put,
};
