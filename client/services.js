'use strict';

app.service('User', function($http, $state) {

  this.currentUser = {};

  this.storeUser = (user) => {
    this.currentUser = user;
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
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  this.getUser = () => {
    if (!Object.keys(this.currentUser).length) {
      this.isLoggedIn()
      .then(() => {
        return this.currentUser;
      })
    }
    return this.currentUser;
  }

  this.saveLangs = (langs) => {
    this.currentUser.languages = langs;
  }

  this.saveInterests = (interests) => {
    this.currentUser.interests = interests;
  }

  this.saveLocation = (location, verified) => {
    this.currentUser.location = {
      location,
      verified
    }
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
