const getAllPlatforms = `
  select json_agg(
    json_build_object(
      'id', p.id,
      'description', p.name
    ) order by id
  ) results from platforms p
`;

module.exports = {
  getAllPlatforms,
};