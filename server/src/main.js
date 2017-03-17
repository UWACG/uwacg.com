/* eslint no-console: "off" */
/**
 * main.js
 * Server root module.
 */

// Server framework, https://github.com/expressjs/express
const express = require('express');
// Logging middleware, https://github.com/expressjs/morgan
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('dev'));

// Hello world page.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/src', 'index.html'));
});

app.listen(8080);
console.log('App listening on port 8080');
