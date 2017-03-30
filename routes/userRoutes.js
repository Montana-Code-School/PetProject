import React from 'react';
import webpack from 'webpack';
import hash from 'password-hash';
import User from '../models/user';
import jwt from 'jsonwebtoken';
import configAuth from '../tools/configAuth';

let express = require('express');
let userRoutes = express.Router();
let app = express();

userRoutes.use(function(req, res, next){
  console.log('User Routes Activity...');
  res.setHeader('Content-Type', 'application/json');
  next();
});

app.set('superSecret', configAuth.secret);

userRoutes.post('/newUser', function(req, res) {
  let user = new User();
  user.name = req.body.name;
  user.password = hash.generate(req.body.password);
  user.email = req.body.email;

  user.save(function(err, user){
    if(err){
      res.send(err);
    } else {
      res.json(user);
    }
  });
});

// route to authenticate a user (POST http://localhost:8080/api/authenticate)
userRoutes.post('/authenticate', function(req, res) {
  // find the user
  User.findOne({
    name: req.body.name
  }, function(err, user) {

    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {

      // check if password matches
      if (!hash.verify(req.body.password, user.password)) {
        res.json({
          success: false,
          message: 'Authentication failed. Wrong password.'
        });

      } else {
        // if user is found and password is right
        // create a token
        let token = jwt.sign(user, app.get('superSecret'), {
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
userRoutes.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  let token = req.body.token || req.query.token || req.headers['x-access-token'];
  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, app.get('superSecret'), function(err, decoded) {
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
userRoutes.get('/users', function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
});



export default userRoutes;
