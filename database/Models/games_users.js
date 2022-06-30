/* eslint-disable camelcase */
const { pool } = require('../index');

const get = (user_id) => {
  const getUsersGames = `
  select json_agg(
    json_build_object(
        'id', g.id,
        'steam_appid', g.steam_appid,
        'name', g.name,
        'developers', g.developers,
        'publishers', g.publishers,
        'short_description', g.short_description,
        'header_image', g.header_image,
        'release_date', g.release_date,
        'website', g.website,
        'required_age', g.required_age,
        'status', g.status,
        'genres', (select json_agg(description)
                   from genre INNER JOIN game_genre gg ON
                   (genre.genre_id = gg.genre_id )
                   INNER JOIN games ON (games.id = gg.game_id)
                   where gg.game_id = g.id),
        'categories', (select json_agg(description)
                   from category INNER JOIN game_category gc ON
                   (category.category_id = gc.category_id )
                   INNER JOIN games ON (games.id = gc.game_id)
                   where gc.game_id = g.id),
        'platforms', (select json_agg(platforms.name)
                   from platforms INNER JOIN game_platform gp ON
                   (platforms.id = gp.platform_id )
                   INNER JOIN games ON (games.id = gp.game_id)
                   where gp.game_id = g.id)) order by id) results
  from (
    select
        gs.id,
        gs.steam_appid,
        gs.name,
        gs.developers,
        gs.publishers,
        gs.short_description,
        gs.header_image,
        gs.release_date,
        gs.website,
        gs.required_age,
        gu.status
            FROM games gs
            inner join game_user gu
            on (gs.id = gu.game_id)
            inner join users u
            on (gu.user_id = u.id)
            where (u.site_id = ${user_id} AND gs.name not like '%?%' and gs.short_description not like '%?%')
          ORDER BY gs.id
      ) as g;
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
  values(4, (select u.id
            from users u
            where u.site_id = ${user_id}), 'playing', 'fun', 5);
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
  set status = ${status}
  where game_id = ${game_id} and user_id =
  (select u.id
    from users u
    where u.site_id = ${user_id});
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
    review = ${review}
  where game_id = ${game_id} and user_id =
    (select u.id
    from users u
    where u.site_id = ${user_id});
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
  delete from game_user where user_id = (select u.id
  from users u
  where u.site_id = ${user_id}) and game_id = ${game_id}
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
