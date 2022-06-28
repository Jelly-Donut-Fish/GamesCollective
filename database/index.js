const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: USER,
  host: AWS_HOST,
  database: DATABASE,
  password: PASSWORD,
  max: 25
});

const poolConnect = function() {
  this.pool.connect()
  .then((res) => console.log('Success!!'))
  .catch((err) => console.log(err))
}

module.exports = {
  pool: pool,
  poolConnect: poolConnect
}