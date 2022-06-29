const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
  max: 25,
});

const poolConnect = function() {
  this.pool.connect()
    .then((res) => console.log('Success!!'))
    .catch((err) => console.log(err));
};

module.exports = {
  pool: pool,
  poolConnect: poolConnect
}