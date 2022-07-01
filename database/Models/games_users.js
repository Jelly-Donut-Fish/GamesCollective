/* eslint-disable camelcase */
const { pool } = require('../index');
const {
  addGamesToCol,
  editRatingReview,
  changeStatus,
  getUsersGames,
  removeGameFromCol,
} = require('./collectionQueries');

const get = (user_id) => pool.query(getUsersGames, [user_id]);

const post = (user_id, {
  game_id, review, rating, status,
}) => pool.query(addGamesToCol, [user_id, game_id, status, review, rating]);

const putStatus = ({
  user_id,
  game_id,
  status,
}) => pool.query(changeStatus, [status, game_id, user_id]);

const putRatings = ({
  user_id,
  game_id,
  review,
  rating,
}) => pool.query(editRatingReview, [rating, review, game_id, user_id]);

const deleteGame = (game_id, user_id) => (
  pool.query(removeGameFromCol, [user_id, Number.parseInt(game_id)])
);

module.exports = {
  get,
  post,
  putStatus,
  putRatings,
  deleteGame,
};
