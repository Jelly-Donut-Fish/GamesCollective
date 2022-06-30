const genreModel = require('../../database/Models/genres');

const get = (req, res) => {
  genreModel.get()
    .then((data) => {
      res.send(data.rows[0]);
    })
    .catch((err) => {
      res.send(err.message);
    });
};

module.exports = {
  get,
};
