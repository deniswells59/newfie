app.controller('dashCtrl', dashCtrl);

function
  dashCtrl($state, $scope, user, $location, User, Location, AirBnB, $mdDialog, $mdMedia) {

  if (!user) {
    $state.go('home');
  }
  if (!user.registered) {
    $state.go('registerNav.registerLang');
  }

  let self = this;

  $scope.user = user;
  $scope.loading = false;
  $scope.pending = false;
  $scope.city = 'Click on the map to add new places';
  $scope.$watch('selectedTab', function(current, old) {
    switch(current) {
      case 0:
        $location.url("/dash/profile");
        break;
      case 1:
        if (user.type === 'Guide') {
          $location.url("/dash/guide");
        } else {
          $location.url("/dash/guide/intro");
        }
        break;
      case 2:
        $location.url("/dash/places");
        break;
    }
  })

  $scope.getLocation = function(event) {
    if(!$scope.pending) {
      $scope.loading = true;
      self.location = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      }
      $scope.user.places.push(self.location);
      Location.getCity(self.location)
        .then(res => {
          $scope.city = res;
          if(res !== 'Cant find a city there...') {
            $scope.pending = true;
            $scope.loading = false;
            self.location.name = res;
          } else {
            $scope.user.places.pop();
          }
        })
    }
  }

  $scope.savePlace = function() {
    $scope.city = 'Click on the map to add new places';
    $scope.pending = false;
    User.savePlace(self.location)
  }

  $scope.cancelPlace = function() {
    $scope.user.places.pop();
    $scope.pending = false;
    $scope.city = 'Click on the map to add new places';
  }

  $scope.newGuide = function() {
    User.becomeGuide()
      .then(() => {
        $scope.user.type = "Guide";
        $location.url("/dash/guide");
      });
  }

  $scope.showAdvanced = function(ev) {
    if(!$scope.user.trip.location) return $scope.err = 'Enter a location above!';
    let useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
    AirBnB.saveLocation($scope.user.trip.location);
    $mdDialog.show({
      controller: BnBController,
      templateUrl: '../html/dash/airbnbResults.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: useFullScreen
    })
    .then(function(answer) {
      console.log('Saved');
    }, function() {
      console.log('Cancelled');
    });
  }
}
