#!/usr/bin/env node

'use strict';

var config = require('./server-config');

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || config.env;

var express = require('express');
var compress = require('compression');
var errorHandler = require('errorhandler');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
//Compression
app.use(compress());

//change to point to your directory that you wil be serving out of most likey build or dist
app.use(express.static(__dirname + config.dest));


app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));

app.set('port', process.env.PORT || config.port);
app.get('/', function(req, res) {
  res.send(200, 'Authenticated');
});

require('./routes.js')(app);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on %d, in %s mode',
    server.address().port,
    app.get('env'));
});
