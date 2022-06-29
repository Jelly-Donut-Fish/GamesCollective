const getAllGames = `
  select json_build_object(
    'page', $1,
    'count', $2,
    'results', json_agg(
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
          where gp.game_id = g.id)) order by id)) results
    from (
      SELECT
        gs.id,
        gs.steam_appid,
        gs.name,
        gs.developers,
        gs.publishers,
        gs.short_description,
        gs.header_image,
        gs.release_date,
        gs.website,
        gs.required_age
      FROM games gs
        where (gs.name not like '%?%' and gs.short_description not like '%?%')
        order by id
      OFFSET ($1 - 1) * $2
      LIMIT $2
    ) as g;
`;

const getGame = `
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
      SELECT
        gs.id,
        gs.steam_appid,
        gs.name,
        gs.developers,
        gs.publishers,
        gs.short_description,
        gs.header_image,
        gs.release_date,
        gs.website,
        gs.required_age
      FROM games gs
        where (gs.name not like '%?%' and gs.short_description not like '%?%')
        order by id
      where id = $1
    ) as g;
`;

module.exports = {
  getAllGames,
  getGame,
};