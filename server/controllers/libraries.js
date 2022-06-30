const libraryModel = require('../../database/Models/libraries');

const get = (req, res) => {
  libraryModel.get()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err.message);
    });
};

module.exports = {
  get,
};
