const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const databaseCredentials = require('./credentials').databaseCredentials;
const server = express();

mongoose.connect(
    `mongodb+srv://${databaseCredentials.user}:${databaseCredentials.password}@cluster0-hdwpb.mongodb.net/omnistack8?retryWrites=true&w=majority`, {
    useNewUrlParser: true
    });

server.use(cors());
server.use(express.json()); // informar ao express para usar JSON
server.use(routes);

server.listen(3333);
