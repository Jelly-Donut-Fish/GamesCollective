const commentsModel = require('../../database/Models/games');

const post = function(req, res) {
  commentsModel.post(req.body)
  .then(() => {

  })
  .catch(() => {

  })
}

const put = function(req, res) {
  let {comment_id} = req.params;
  commentsModel.put(comment_id)
  .then(() => {

  })
  .catch(() => {

  })
}

module.exports = {
  post: post,
  put: put
}