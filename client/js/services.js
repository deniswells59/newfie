'use strict';

var app = angular.module('myApp');

app.service('User', function($http, $state) {

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

});
