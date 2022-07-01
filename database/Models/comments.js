const { pool } = require('../index');
const comment = require('./comments_query');

const post = function(bodyObj) {
  const { user_id, body, game_id, title, image_url, parent_comment_id } = bodyObj;
  return pool.query(comment.addComment, [user_id, body, game_id, title, image_url, parent_comment_id])
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