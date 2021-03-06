import request from 'request';
import qs from 'querystring';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import User from '../models/user';

export default class Auth {
  static google(req, res) {
    var accessTokenUrl = 'https://accounts.google.com/o/oauth2/token';
    var peopleApiUrl = 'https://www.googleapis.com/plus/v1/people/me/openIdConnect';
    var params = {
      code: req.body.code,
      client_id: req.body.clientId,
      client_secret: process.env.GOOGLE_SECRET,
      redirect_uri: req.body.redirectUri,
      grant_type: 'authorization_code'
    };

    // Step 1. Exchange authorization code for access token.
    request.post(accessTokenUrl, { json: true, form: params }, function(err, response, token) {
      var accessToken = token.access_token;
      var headers = { Authorization: 'Bearer ' + accessToken };

      // Step 2. Retrieve profile information about the current user.
      request.get({ url: peopleApiUrl, headers: headers, json: true }, function(err, response, profile) {
        if (profile.error) {
          return res.status(500).send({message: profile.error.message});
        }
        // Step 3a. Link user accounts.
        if (req.header('Authorization')) {
          User.findOne({ google: profile.sub }, function(err, existingUser) {
            if (existingUser) {
              return res.status(409).send({ message: 'There is already a Google account that belongs to you' });
            }
            var token = req.header('Authorization').split(' ')[1];
            var payload = jwt.decode(token, process.env.JWT_SECRET);
            User.findById(payload.sub, function(err, user) {
              if (!user) {
                return res.status(400).send({ message: 'User not found' });
              }

              user.save(function() {
                var token = user.generateToken();
                res.send({
                  token: token,
                  user: user
                 });
              });
            }).populate('trip requests companions messages');
          });
        } else {
          // Step 3b. Create a new user account or return an existing one.
          User.findOne({ google: profile.sub }, function(err, existingUser) {
            if (existingUser) {
              return res.send({
                token: existingUser.generateToken(),
                user: existingUser
              });
            }
            var user = new User();
            user.google = profile.sub;
            user.img = profile.picture.replace('sz=50', 'sz=200');
            user.name = profile.name;
            user.email = profile.email;
            user.save((err, savedUser) => {
              console.log('err', err);

              var token = savedUser.generateToken();
              res.send({
                token,
                user
              });
            });
          }).populate('trip requests companions messages');
        }
      });
    });
  }

  static facebook(req, res) {
    var fields = ['id', 'email', 'first_name', 'last_name', 'link', 'name'];
    var accessTokenUrl = 'https://graph.facebook.com/v2.5/oauth/access_token';
    var graphApiUrl = 'https://graph.facebook.com/v2.5/me?fields=' + fields.join(',');
    var params = {
      code: req.body.code,
      client_id: req.body.clientId,
      client_secret: process.env.FACEBOOK_SECRET,
      redirect_uri: req.body.redirectUri
    };

    // Step 1. Exchange authorization code for access token.
    request.get({ url: accessTokenUrl, qs: params, json: true }, function(err, response, accessToken) {
      if (err) {
        return res.status(500).send({ message: accessToken.error.message });
      }

      // Step 2. Retrieve profile information about the current user.
      request.get({ url: graphApiUrl, qs: accessToken, json: true }, function(err, response, profile) {
        if (err) {
          return res.status(500).send({ message: profile.error.message });
        }
        if (req.header('Authorization')) {
          User.findOne({ facebook: profile.id }, function(err, existingUser) {
            if (existingUser) {
              return res.status(409).send({ message: 'There is already a Facebook account that belongs to you' });
            }
            var token = req.header('Authorization').split(' ')[1];
            var payload = jwt.decode(token, process.env.JWT_SECRET);
            User.findById(payload.sub, function(err, user) {
              if (!user) {
                return res.status(400).send({ message: 'User not found' });
              }
              user.facebook = profile.id;
              user.picture = user.picture || 'https://graph.facebook.com/v2.3/' + profile.id + '/picture?type=large';
              user.displayName = user.displayName || profile.name;
              user.save(function() {
                var token = user.generateToken();
                res.send({
                  token,
                  user
                });
              });
            }).populate('trip requests companions messages');
          });
        } else {
          // Step 3. Create a new user account or return an existing one.
          User.findOne({ facebook: profile.id }, function(err, existingUser) {
            if (existingUser) {
              var token = existingUser.generateToken();
              return res.send({
                token,
                user: existingUser
              });
            }
            var user = new User();
            user.facebook = profile.id;
            user.picture = 'https://graph.facebook.com/' + profile.id + '/picture?type=large';
            user.displayName = profile.name;
            user.save(function() {
              var token = user.generateToken();
              res.send({
                token,
                user
              });
            });
          }).populate('trip requests companions messages');
        }
      });
    });
  }

  static login(req, res) {
    let user = req.body;
    User.findOne({ email: user.email }, (err, existingUser) => {
      if(existingUser) {
        bcrypt.compare(user.password, existingUser.password, (err, authenticated) => {
          if(!authenticated) return res.status(401).send('Incorrect Password');
          const token = existingUser.generateToken();
          res.send({
            token,
            user: existingUser
          })
        });
      } else {
        bcrypt.hash(req.body.password, 11, (err, hash) => {
          User.create({
            email: req.body.email,
            password: hash
          }, (err, user) => {
            if(err) return res.status(400).send(err);
            const token = user.generateToken();
            res.send({
              token,
              user: user
            })
          })
        });
      }
    }).populate('trip requests companions messages');
  }


}
