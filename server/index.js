require('dotenv').config();
const express = require("express");
const gd = require('./getDestination');
// const massive = require('massive');

const { SERVER_PORT } = process.env;

const app = express();

app.use(express.json());


// ENDPOINTS
app.get('/api/destination/:id', gd.read);
// app.get('/api/crew/:id', getCrew);
// app.get('/api/technology/:id', getTechnology);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});

