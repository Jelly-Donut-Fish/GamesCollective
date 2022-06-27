const express = require('express');
const path = require('path');
const route = require('./routes');

const app = express();

// middleware
app.use(express.static(path.join(__dirname, '..', '/client/dist')));
app.use(express.json());

app.use('*', route);

app.listen(process.env.PORT, () => {
  console.log(`server listening on localhost:${process.env.PORT}`);
});
