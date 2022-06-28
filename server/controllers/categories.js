const commentsModel = require('../../database/Models/comments');

const getAll = function(req, res) {
  commentsModel.getAll()
  .then(() => {

  })
  .catch(() => {

  })
}

module.exports = {
  getAll: getAll
}