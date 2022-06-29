const getAllGenres = `
  select json_agg(
    json_build_object(
      'id', g.id,
      'genres_id', g.genre_id,
      'name', g.description
    ) order by id
  ) results from genre g
`;

module.exports = {
  getAllGenres,
};