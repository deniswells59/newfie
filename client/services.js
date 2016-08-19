'use strict';

app.service('User', function($http, $state) {

  this.currentUser = {};

  this.getAll = (selectObj) => {
    return $http.put('api/users', selectObj)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log('err', err);
      })
  }

  this.getOne = (id) => {
    return $http.get(`api/users/one/${id}`);
  }

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

  this.confirm = (name) => {
    const updateObj = {
      languages: this.currentUser.languages,
      interests: this.currentUser.interests,
      location: this.currentUser.location
    }

    if(name) updateObj.name = name;

    $http.put('/api/users/register', updateObj)
      .then(user => {
        this.currentUser = user.data;
        $state.go('dashboard');
      })
      .catch(err => console.log('err', err));
  }

  this.editProfile = (newProfile) => {
    return $http.put('/api/users/update', newProfile)
      .then(user => {
        return user.data;
      })
      .catch(err => console.log('err', err));
  }

  this.savePlace = (place) => {
    return $http.put('/api/users/place', place)
      .then(user => {
        this.currentUser = user.data;
      })
      .catch(err => console.log('err', err));
  }

  this.becomeGuide = () => {
    return $http.put('/api/users/guide');
  }

  this.saveGuide = (trip) => {
    return $http.put('/api/users/trip', trip)
      .then(res => {
        return res.data;
      })
      .catch(err => {
        console.log('err', err);
      })
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
    return $http.post('/api/users/validate/languages', user)
      .then(res => {
        if(typeof res.data === 'string') {
          return res.data;
        }
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
});

app.service('AirBnB', function($http) {
  this.query = {};

  this.saveLocation = (location) => {
    this.query.location = location;
  }

  this.getResults = (name) => {
    if(this.name) {
      this.query.name = name;
    }

    return $http.put('/api/airbnb/search', this.query)
      .then(res => {
        return res.data;
      })
      .catch(err => console.log('err', err));
  }
});

app.service('Companion', function($http) {
  this.sendRequest = (companionId) => {
    return $http.post('/api/users/request', { companionId });
  }

  this.declineRequest = (companionId) => {
    return $http.post('api/users/decline', { companionId })
      .then(res => {
        return res.data;
      })
      .catch(err => console.log('err', err));
  }

  this.acceptCompanion = (companionId) => {
    return $http.post('api/users/companion', { companionId })
      .then(res => {
        return res.data;
      })
      .catch(err => console.log('err', err));
  }
});

app.service('Messages', function($http, User) {

  this.companion = {};

  this.getCompanion = (arr, id) => {
    arr.some(companion => {
      if(companion._id === id) {
        this.companion = companion;
        return true;
      }
    });
  }

  this.getCompanionMessages = () => {
    const user = User.getUser();

    return user.messages.filter(message => {
      if(message.author === this.companion._id) return message;
    });
  }

  this.returnsCompanion = () => {
    return this.companion;
  }

  this.sendMessage = (obj) => {
    return $http.post('api/users/messages', obj)
      .then(res => {
        return res.data;
      })
      .catch(err => console.log('err', err));
  }

  this.read = (_id) => {
    return $http.put('api/users/read', { _id })
      .then(res => {
        return res.data;
      })
      .catch(err => console.log('err', err));
  }

});

app.service('Mail', function($http) {

  this.sendFeedback = (messageObj) => {
    return $http.post('api/mail/', messageObj)
      .catch(err => console.log('err', err));
  }

});
