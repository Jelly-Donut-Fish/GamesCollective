const { pool } = require('../index');

const { createUser, getUserInfo, updateUser } = require('./userProfileQueries');

const post = (body) => {
  console.log('inside users', body);
  pool.connect()
    .then((client) => {
      return client.query()
    })
    .catch();
};

const get = (user_id) => {

};

const put = (body) => {

};

module.exports = {
  post,
  get,
  put,
};
