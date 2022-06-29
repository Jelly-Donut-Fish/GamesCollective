const categoriesModel = require('../../database/Models/categories');

const get = function (req, res) {
  categoriesModel.get()
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