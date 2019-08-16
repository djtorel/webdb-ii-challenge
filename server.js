const express = require('express');

const carRoutes = require('./routes/cars');

const server = express();

server.use(express.json());

server.use('/api/cars', carRoutes);

module.exports = server;
