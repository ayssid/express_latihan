/**
 * Created by Yogi on 4/26/2015.
 */

var express = require('express');

module.exports = function() {
    var app = express();
    require('../app/routes/index.server.routes')(app);
    return app;
}