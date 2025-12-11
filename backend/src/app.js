const express = require('express');
const cors = require('cors');
const usersRoute = require('./routes/users');

const app = express();

app.use(cors());          // ← FIX CORS
app.use(express.json());

app.use('/api/users', usersRoute);

module.exports = app;
