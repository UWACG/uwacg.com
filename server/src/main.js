/**
 * main.js
 * Server root module.
 */ 

const express = require('express'); // Server framework, https://github.com/expressjs/express
const morgan = require('morgan'); // Logging middleware, https://github.com/expressjs/morgan
const path = require('path');

const app = express();

app.use(morgan('dev')); 

// Hello world page.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/src', 'index.html'));
});

app.listen(8080);
console.log("App listening on port 8080");
