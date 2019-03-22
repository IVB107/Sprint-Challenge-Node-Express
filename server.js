const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const actionRouter = require('./routers/action-router.js');
const projectRouter = require('./routers/project-router.js');

const server = express();

// Middleware

server.use(express.json());
server.use(helmet());
server.use(cors());

// Routing

server.use('/api/actions', actionRouter);
server.use('/api/projects', projectRouter);

server.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to IVB's Node/Express Sprint Challenge!</h1>
  `)
});

module.exports = server;