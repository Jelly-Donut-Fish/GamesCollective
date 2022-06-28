const platformModel = require('../../database/models/platforms');
const get = function (req, res) {
  platformModel.get()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err.message);
    })
}

module.exports = {
  get: get
}