var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var logger = require('morgan');
var knex = require('./db/knex');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

require('./config/session.js')(app);

var routes_setter = require('./config/routes')
routes_setter(app);

app.listen(port, function() {
console.log("listening on port: ", port);
})
