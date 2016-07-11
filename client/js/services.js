'use strict';

var app = angular.module('myApp');

app.service('User', function($http, $state) {

  this.regUser = {
    languages: [],
    interests: [],
    location: {}
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

  this.saveLocation = (location, verified) => {
    this.regUser.location = {
      location,
      verified
    }
  }

  this.log = () => {
    console.log('USER', this.regUser);
  }

});

app.service('Location', function($http){
  this.getCity = (location) => {
    return $http.post('/api/location/city', location)
      .then(res => {
        return res.data;
      })
      .catch(err => console.log('err', err));
  }
})
