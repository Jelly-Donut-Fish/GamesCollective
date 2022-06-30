const addGamesToCol = `
  insert into
  game_user (game_id, user_id, status, review, rating)
  select
    $2,
    (select u.id
    from users u
    where u.site_id = $1),
    $3,
    $4,
    $5
  where not exists
      (select * from game_user
        where user_id = (select u.id
          from users u
          where u.site_id = $1)
        and game_id = $2)
`;

const editRatingReview = `
  update game_user
  set
    rating = $1,
    review = $2
  where game_id = $3 and user_id =
    (select u.id
    from users u
    where u.site_id = $4);
`;

const changeStatus = `
  update game_user
  set status = $1
  where game_id = $2 and user_id =
  (select u.id
    from users u
    where u.site_id = $3);
`;

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
      'overall_rating', (select trim_scale(AVG(gu.rating)) from game_user gu where gu.game_id = g.id and gu.rating is not null),
      'user_rating', g.rating,
      'user_review', g.review,
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
      gu.status,
      gu.rating,
      gu.review
          FROM games gs
          inner join game_user gu
          on (gs.id = gu.game_id)
          inner join users u
          on (gu.user_id = u.id)
          where (u.site_id = $1 AND gs.name not like '%?%' and gs.short_description not like '%?%')
        ORDER BY gs.id
    ) as g;
`;

const removeGameFromCol = `
  delete from game_user where user_id = (select u.id
  from users u
  where u.site_id = $1) and game_id = $2;
`;

module.exports = {
  addGamesToCol,
  editRatingReview,
  changeStatus,
  getUsersGames,
  removeGameFromCol,
};
