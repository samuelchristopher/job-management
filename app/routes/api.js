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

  api.post('/login', function(req, res) {
    ref.authWithPassword({
      email    : req.body.email,
      password : req.body.password
    }, function(error, authData) {
      if (error) {
        res.send({
          message: error
        });
      } else {
        res.json({
          success: true,
          message: "Succesfully logged in",
          authData,
          token: authData.token
        });
      }
    });
  });

  return api;

};
