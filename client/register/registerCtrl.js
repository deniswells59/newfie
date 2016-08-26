app.controller('registerCtrl', registerCtrl);

function
  registerCtrl($timeout, $q, $log, $scope, $state, $auth, User, DuoLingo, Location, NgMap, $rootScope) {
  if(!$auth.isAuthenticated()) {
    $state.go('home');
  }

  let self = this;

  $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams){
      self.breadCrumb = toState.url;
  });

  self.breadCrumb = '/languages';
  self.simulateQuery = true;
  self.languages = langObj;
  self.querySearch   = querySearch;
  self.selectedItemChange = selectedItemChange;
  self.removeLang = removeLang;
  self.removeInt = removeInt;
  self.nextClicked = nextClicked;
  self.addCustom = addCustom;
  self.mapCallback = mapCallback;
  self.replaceMarker = replaceMarker;
  self.verifyDuoUser = verifyDuoUser;
  self.confirmUser = confirmUser;
  self.interests = ['Food', 'Nature', 'Attractions', 'City', 'Home Life', 'Party Life'];
  self.user = User.getUser();
  self.waiting = true;
  self.checking = false;
  self.done = false;
  self.selectedLangs = [];
  self.selectedInterests = [];
  self.city = '';
  self.customCity = '';
  self.lng = 0;
  self.lat = 0;
  self.searchTerm;
  self.customInterest = '';

  function nextClicked(bool) {
    if (self.selectedLangs.length) {
      User.saveLangs(self.selectedLangs);
    }
    if (self.selectedInterests.length) {
      User.saveInterests(self.selectedInterests);
    }
    if (self.city && bool) {
      User.saveLocation(self.city, bool);
    } else if(self.customCity){
      User.saveLocation(self.customCity, false);
    }
  }

  function querySearch (query) {
    let results = query ? self.languages.filter( createFilterFor(query) ) : self.languages,
        deferred;
    if (self.simulateQuery) {
      deferred = $q.defer();
      $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
      return deferred.promise;
    } else {
      return results;
    }
  }

  function createFilterFor(query) {
    return function filterFn(language) {
      return (language.value.indexOf(query) === 0);
    };
  }

  function selectedItemChange(lang) {
    if (lang) {
      self.selectedLangs.push(angular.copy(lang));
    }
  }

  function removeLang(language) {
    let index;
    self.selectedLangs.some((lang, idx) => {
      if (lang.name === language) {
        index = idx;
        return true;
      }
    });
    self.selectedLangs.splice(index, 1);
  }

  function removeInt(interest) {
    let index;
    self.selectedInterests.some((int, idx) => {
      if (int.name === interest) {
        index = idx;
        return true;
      }
    });
    self.selectedInterests.splice(index, 1);
  }

  function verifyDuoUser() {
    self.duoErr = null;
    self.waiting = false;
    self.checking = true;
    DuoLingo.verifyLanguages(self.selectedLangs, self.duoUser)
      .then(verified => {
        self.checking = false;
        if(typeof verified === 'object') {
          self.done = true;
          self.selectedLangs = verified;
        } else {
          self.waiting = true;
          self.duoErr = verified;
          console.log(self.duoErr);
        }
      })
  }

  function addCustom() {
    self.selectedInterests.push(angular.copy(self.customInterest));
    self.customInterest = '';
  }

  NgMap.getMap()
    .then(map => {
      map.addListener('tilesloaded', mapCallback);
      self.map = map;
    });

  function mapCallback() {
    let location = self.map.getCenter();
    self.lat = location.lat();
    self.lng = location.lng();
    Location.getCity({lat: self.lat, lng: self.lng})
      .then(res => {
        self.city = res;
      })
  }

  function replaceMarker(event) {
    self.lat = event.latLng.lat();
    self.lng = event.latLng.lng();
    Location.getCity({lat: self.lat, lng: self.lng})
      .then(res => {
        self.city = res;
      })
    }

  function confirmUser() {
    User.confirm(self.regName);
  }
};
