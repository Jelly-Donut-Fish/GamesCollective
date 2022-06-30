const { pool } = require('../index');
const comment = require('./comments_query');

const post = function(body) {
  return pool.query(comment.addComment, [body.user_id, body.body, body.game_id, body.title, body.image_url, body.parent_comment_id])
}

const put = function(comment_id) {
  return pool.query(comment.reportComment, [comment_id])
}

const get = function(game_id) {
  return pool.query(comment.getAllCommentsForAGame, [game_id])
}

module.exports = {
  get: get,
  post:post,
  put:put
}