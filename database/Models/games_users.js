/* eslint-disable camelcase */
const { pool } = require('../index');

const get = (user_id) => {
  const getUsersGames = `
  select((
    select json_build_object(
      'id', ${user_id},
      'steam_appid', g.steam_appid,
      'name', g.name,
      'developers', g.developers,
      'publishers', g.publishers,
      'short_description', g.short_description,
      'header_image', g.header_image,
      'release_date', g.release_date,
      'website', g.website,
      'required_age', g.required_age
    )from games g where g.id = gu.game_id
  ))from  game_user gu where gu.user_id = ${user_id}
`;
  // eslint-disable-next-line semi
  return pool.query(getUsersGames)
};

const post = (user_id, body) => {
  // eslint-disable-next-line no-param-reassign
  body.status = body.status || 'want to play';
  const {
    game_id,
    review,
    rating,
  } = body;

  const addGamesToCol = `
  insert into
  game_user (game_id, user_id, status, review, rating)
  values(${game_id}, ${user_id}, '${body.status}', '${review}', ${rating})
`;
  // eslint-disable-next-line semi
  return pool.query(addGamesToCol)
};

const putStatus = (body) => {
  const {
    user_id,
    game_id,
    status,
  } = body;
  const changeStatus = `
  update game_user
  set status = '${status}'
  where game_id = ${game_id} and user_id = ${user_id}
`;

  // eslint-disable-next-line semi
  return pool.query(changeStatus)
};

const putRatings = (body) => {
  const {
    user_id,
    game_id,
    review,
    rating,
  } = body;

  const editRatingReview = `
  update game_user
  set
    rating = ${rating},
    review = '${review}'
  where game_id = ${game_id} and user_id = ${user_id}
`;

  // eslint-disable-next-line semi
  return pool.query(editRatingReview)
};

const deleteGame = (body) => {
  const {
    user_id,
    game_id,
  } = body;
  const removeGameFromCol = `
  delete from game_user where user_id = ${user_id} and game_id = ${game_id}
`;

  // eslint-disable-next-line semi
  return pool.query(removeGameFromCol)
};

module.exports = {
  get,
  post,
  putStatus,
  putRatings,
  deleteGame,
};
