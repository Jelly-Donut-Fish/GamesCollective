const getAllCoomments = `
  select json_agg(
    json_build_object(
      'id', cu.id,
      'username', cu.username,
      'date', cu.date,
      'title', cu.title,
      'body', cu.body,
      'parent_id', cu.parent_comment_id,
      'image_url', cu.image_url,
      'upvote', cu.up_vote,
      'downvote', cu.down_vote
    ) order by id
  ) from (
      select
        c.id,
        u.username,
        c.date,
        c.title,
        c.body,
        c.parent_comment_id,
        c.image_url,
        c.up_vote,
        c.down_vote,
        FROM comments c
        INNER JOIN
        users u ON
        (c.user_id = u.id)
  ) as cu;
`;

//image_url is not required
const addCoomment = `
  insert into
  comments (user_id, body, game_id, title, image_url)
  values ($1, $2, $3, $4, $5)
`;

const reportCoomment = `
  update comments
  set
    report = report + 1
  where id = $1
`;

const upvoteCoomment = `
  update comments
  set
    up_vote = up_vote + 1
  where id = $1
`;

const downvoteCoomment = `
  update comments
  set
    down_vote = down_vote + 1
  where id = $1
`;

const deleteCoomment = `
  delete from comments
  where id = $1
`;

module.exports = {
  getAllCoomments,
  addCoomment,
  reportCoomment,
  upvoteCoomment,
  downvoteCoomment,
  deleteCoomment,
};