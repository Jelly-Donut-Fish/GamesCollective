const getAllCategories = `
  select json_agg(
    json_build_object(
      'id', c.id,
      'categories_id', c.category_id,
      'name', c.description
    ) order by id
  ) results from category c
`;

module.exports = {
  getAllCategories,
};