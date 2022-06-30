/* eslint-disable camelcase */
const { pool } = require('../index');

const { createUser, getUserInfo, updateUser } = require('./userProfileQueries');

const post = ({
  username, email, site_id, bio, image_url,
}, res) => {
  pool.connect()
    .then((client) => {
      client.query(createUser, [username, email, site_id, bio, image_url])
        .then(() => {
          client.release();
          res.sendStatus(201);
        });
    })
    .catch(() => {
      res.sendStatus(500);
    });
};

const get = ({ user_id }, res) => {
  pool.connect()
    .then((client) => {
      client.query(getUserInfo, [user_id])
        .then((dbRes) => {
          client.release();
          if (dbRes.rows[0]) {
            res.json(dbRes.rows[0]);
          } else {
            res.json('no user found');
          }
        });
    })
    .catch(() => {
      res.sendStaus(500);
    });
};

const put = ({
  user_id, bio, username, image_url,
}, res) => {
  console.log([user_id, bio, username, image_url]);
  pool.connect()
    .then((client) => {
      client.query(updateUser, [user_id, bio, username, image_url])
        .then((dbRes) => {
          client.release();
          res.sendStatus(200);
        });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  post,
  get,
  put,
};
