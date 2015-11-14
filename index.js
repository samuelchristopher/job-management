var express    = require('express');
var morgan     = require('morgan');
var bodyParser = require('body-parser');
var config     = require('./app/config');
var path       = require('path');
var firebase   = require('firebase');

var db  = new firebase(config.database);
var app = express();

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, '/app/src/views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static('build'));

app.get('*', function(req, res) {
  res.render('index', { a: "John" });
});

app.listen(config.port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Listening on port ' + config.port);
  }
});
