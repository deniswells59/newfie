app.controller('registerCtrl', registerCtrl);

function registerCtrl ($timeout, $q, $log, $scope, User) {

  let self = this;
  self.simulateQuery = true;
  // list of `state` value/display objects
  self.languages = langObj;
  self.querySearch   = querySearch;
  self.selectedItemChange = selectedItemChange;
  self.removeLang = removeLang;
  self.nextClicked = nextClicked;
  self.addCustom = addCustom;
  self.next = 0;
  self.selectedLangs = [];
  self.selectedInterests = [];
  self.searchTerm;
  self.interests = ['Food', 'Nature', 'Attractions', 'City', 'Home Life', 'Party Life'];
  self.customInterest = '';

  function nextClicked() {
    if (self.selectedLangs) {
      User.saveLangs(self.selectedLangs);
    }
    if (self.selectedInterests) {
      User.saveInterests(self.selectedInterests);
    }

    self.next++;
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

  function addCustom() {
    self.selectedInterests.push(angular.copy(self.customInterest));
    self.customInterest = '';
  }


};
