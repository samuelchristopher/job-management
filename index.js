var express    = require('express');
var morgan     = require('morgan');
var bodyParser = require('body-parser');
var config     = require('./app/config');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.listen(config.port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Listening on port ' + config.port);
  }
});
