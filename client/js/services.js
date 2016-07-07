'use strict';

// var app = angular.module('newfie');

// app.service('User',
function userService($http, $state) {

  this.regUser = {
    languages: [],
    interests: []
  }

  this.login = (user) => {
    return $http.post('api/users/authenticate', user);
  };

  this.register = (user) => {
    return $http.post('api/users/register', user);
  };

  this.logout = () => {
    return $http.post('api/users/logout');
  };

  this.isLoggedIn = () => {
    return $http.get('/api/users/check')
      .then(res => {
        this.currentUser = res.data;
        return res.data;
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  this.saveLangs = (langs) => {
    this.regUser.languages = langs;
  }

  this.saveInterests = (interests) => {
    this.regUser.interests = interests;
  }

  this.log = () => {
    console.log('USER', this.regUser);
  }

};
