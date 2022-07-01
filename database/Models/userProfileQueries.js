const createUser = `
insert into
users(username, email, site_id, bio, img_url)
values($1, $2, $3, $4, $5);
`;

const getUserInfo = `
select json_build_object(
  'id', u.site_id,
  'username', u.username,
	'bio', u.bio,
	'img_url', u.img_url
) results from users u where site_id = $1
`;

const updateUser = `
update users
set
  bio = $2,
  username = $3,
  img_url = $4
where site_id = $1
`;
// update users
// set
//   bio = 'I like turtles',
//   username = 'MyNameIsTest',
//   img_url = 'https://assets.bonappetit.com/photos/57d8302b1807135a7746d83f/16:9/w_1280,c_limit/chunk-the-goonies.jpg'
// where site_id = 'someHash'
module.exports = { createUser, getUserInfo, updateUser };
