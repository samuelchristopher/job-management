var express  = require('express');
var Firebase = require('firebase');
var config   = require('.././config');
var ref      = new Firebase(config.database);
var secret = config.secret;
// var app = express();

module.exports = function (app, express) {
  var api = express.Router();

  api.post('/signup', function(req, res) {
    ref.createUser({
      email    : req.body.email,
      password : req.body.password
    }, function(error, userData) {
      if (error) {
        res.send(error);
        return;
      }
        res.json({
          message: 'User has been created'
        });
    });
  });

  return api;

};
