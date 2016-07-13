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
        return this.currentUser;
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  this.getUser = () => {
    if (!Object.keys(this.currentUser).length) {
      return this.isLoggedIn();
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

  this.confirm = () => {
    const updateObj = {
      languages: this.currentUser.languages,
      interests: this.currentUser.interests,
      location: this.currentUser.location
    }

    $http.put('/api/users/register', updateObj)
      .then(user => {
        console.log(user);
        this.currentUser = user.data;
        $state.go('dashboard');
      })
      .catch(err => console.log('err', err));
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
});

app.service('DuoLingo', function($http){
  this.verifyLanguages = (languages, user) => {
    return $http.post('/api/users/validate/languages', {duoUser: user})
      .then(res => {
        const verifiedLangs = res.data;
        languages.forEach(lang=> {
          if (verifiedLangs[lang.name]) {
            lang.verified = true;
            lang.level = verifiedLangs[lang.name];
          }
        })
        return languages;
      })
      .catch(err => console.log('err', err));
  }
})
