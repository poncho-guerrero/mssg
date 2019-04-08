require('marko/node-require').install();

var express = require('express');
var app = express();

app.get('/', require('./src/pages/home'));

module.exports = app;