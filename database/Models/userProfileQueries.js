const createUser = 'insert into users(username, email, site_id, bio, img_url) values($1, $2, $3, $4, $5)';

const getUserInfo = 'select json_build_object(\'id\', u.id,\'username\', u.username,\'bio\', u.bio,\'site_id\', u.site_id,\'img_url\', u.img_url)from users u where id = $1';

const updateUser = 'update users set bio = $2, username = $3, img_url = $4 where id = $1';

module.exports = { createUser, getUserInfo, updateUser };
