'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _passwordHash = require('password-hash');

var _passwordHash2 = _interopRequireDefault(_passwordHash);

var _user = require('../models/user');

var _user2 = _interopRequireDefault(_user);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _configAuth = require('../tools/configAuth');

var _configAuth2 = _interopRequireDefault(_configAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var userRoutes = express.Router();
var app = express();

userRoutes.use(function (req, res, next) {
  console.log('User Routes Activity...');
  res.setHeader('Content-Type', 'application/json');
  next();
});

app.set('superSecret', _configAuth2.default.secret);

userRoutes.post('/newUser', function (req, res) {
  var user = new _user2.default();
  user.name = req.body.name;
  user.password = _passwordHash2.default.generate(req.body.password);

  user.save(function (err, user) {
    if (err) {
      res.send(err);
    } else {
      res.json(user);
    }
  });
});

// route to authenticate a user (POST http://localhost:8080/api/authenticate)
userRoutes.post('/authenticate', function (req, res) {
  // find the user
  _user2.default.findOne({
    name: req.body.name
  }, function (err, user) {

    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {

      // check if password matches
      if (!_passwordHash2.default.verify(req.body.password, user.password)) {
        res.json({
          success: false,
          message: 'Authentication failed. Wrong password.'
        });
      } else {
        // if user is found and password is right
        // create a token
        var token = _jsonwebtoken2.default.sign(user, app.get('superSecret'), {
          expiresIn: 1440 // expires in 24 hours
        });

        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
      }
    }
  });
});
//---------Start middleware--------------------

// route middleware to verify a token
userRoutes.use(function (req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  // decode token
  if (token) {
    // verifies secret and checks exp
    _jsonwebtoken2.default.verify(token, app.get('superSecret'), function (err, decoded) {
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });
  } else {
    // if there is no token
    // return an error
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    });
  }
});

//---------End middleware--------------------

// route to return all users (GET http://localhost:3000/user/users)
userRoutes.get('/users', function (req, res) {
  _user2.default.find({}, function (err, users) {
    res.json(users);
  });
});

exports.default = userRoutes;