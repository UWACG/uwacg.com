/**
 * main.js
 * Server root module.
 */

// Server framework, https://github.com/expressjs/express
const express = require('express');

// Server config
const config = require('../../config');

// Logging middleware, https://github.com/expressjs/morgan
const morgan = require('morgan');
const path = require('path');

const logger = require('./logger');

const app = express();

// Redirect all morgan logs in express into winston.
app.use(morgan('combined', { stream: logger.stream }));

// Hello world page.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/src', 'index.html'));
});

const port = config.port;
app.listen(port);
logger.info(`Server is running on port ${port}!`);
