/**
 * Created by Yogi on 4/26/2015.
 */

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express');
var app = express();

app.listen(3000);
console.log('Server running at http://localhost:3000/');

module.exports = app;