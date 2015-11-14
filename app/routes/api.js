var express  = require('express');
var Firebase = require('firebase');
var config   = require('.././config');
var ref      = new Firebase(config.database);
var secret   = config.secret;
var jwt      = require('jsonwebtoken');
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

  app.use(function (req, res, next) {
    console.log('Welcome');

    var token = req.body.token || req.param('token') || req.headers['x-access-token'];

    if(token) {
      jwt.verify(token, secret, function(err, decoded) {
        if(err) {
          res.status(403).send({
            success: false,
            message: "Failed to authenticate user"
          });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      res.status(403).send({
        success: false,
        message: 'No token provided'
      });
    }
  });

  return api;

};
