const libraryModel = require('../../database/models/libraries');

const get = function (req, res) {
  libraryModel.get()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err.message)
    })
}

module.exports = {
  get: get
}