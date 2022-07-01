const categoriesModel = require('../../database/Models/categories');

const get = (req, res) => {
  categoriesModel.get()
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
