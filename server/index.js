const express = require('express');
const path = require('path');
const router = require('./routes');
const db = require('../database/index');
require('dotenv').config();

const app = express();

// middleware
app.use(express.static(path.join(__dirname, '..', '/client/dist')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router);

db.poolConnect();

app.listen(process.env.PORT, () => {
  console.log(`server listening on localhost:${process.env.PORT}`);
});
