const express = require('express');
const helmet = require('helmet');

const actionRouter = require('./routers/action-router.js');
const projectRouter = require('./routers/project-router.js');

const server = express();

// Middleware

server.use(express.json());
server.use(helmet());

// Routing

server.use('/api/actions', actionRouter);
server.use('/api/projects', projectRouter);

server.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to IVB's Node/Express Sprint Challenge!</h1>
  `)
});

module.exports = server;