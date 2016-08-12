app.controller('dashCtrl', dashCtrl);

function
  dashCtrl($state, $scope, user, $location, User, Location, AirBnB, Companion, $mdDialog, $mdMedia) {
  console.log(user);
  if (!user) {
    $state.go('home');
  }
  if (!user.registered) {
    $state.go('registerNav.registerLang');
  }
  if (user.trip[0]) {
    $scope.expertise = user.trip[0].expertise;
  } else {
    $scope.expertise = [];
  }

  let self = this;

  $scope.user = user;
  $scope.loading = false;
  $scope.pending = false;
  $scope.editting = false;
  $scope.tmp = angular.copy(user);
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
        $location.url("/dash/companions");
        break;
    }
  })

  $scope.getLocation = (event) => {
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

  $scope.savePlace = () => {
    $scope.city = 'Click on the map to add new places';
    $scope.pending = false;
    User.savePlace(self.location)
  }

  $scope.cancelPlace = () => {
    $scope.user.places.pop();
    $scope.pending = false;
    $scope.city = 'Click on the map to add new places';
  }

  $scope.newGuide = () => {
    User.becomeGuide()
      .then(() => {
        $scope.user.type = "Guide";
        $location.url("/dash/guide");
      });
  }

  $scope.showAdvanced = function(ev) {
    if(!$scope.user.trip[0]) return $scope.err = 'Enter a location above!';
    $scope.err = null;
    let useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
    AirBnB.saveLocation($scope.user.trip[0].location);
    $mdDialog.show({
      controller: BnBController,
      templateUrl: '../html/dash/airbnbResults.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: useFullScreen
    })
    .then(listing => {
      $scope.user.trip[0].airBnB = listing;
    }, () => {
      console.log('Cancelled');
    });
  }

  $scope.saveGuide = () => {
    $scope.user.trip[0].expertise = $scope.expertise;
    User.saveGuide($scope.user.trip[0])
      .then(newUser => {
        $scope.user = newUser;
      });
  }

  $scope.editBio = () => {
    $scope.editting = !$scope.editting;
  }

  $scope.saveBio = () => {
    $scope.editBio();
    User.editProfile($scope.tmp)
      .then(user => {
        console.log(user);
        $scope.user = user;
        $scope.tmp = angular.copy(user);
      })
  }

  $scope.acceptCompanion = (id) => {
    Companion.acceptCompanion(id)
      .then(user => {
        $scope.user = user;
      })
  }

  $scope.declineCompanion = (id) => {
    Companion.declineRequest(id)
      .then(user => {
        $scope.user = user;
      })
  }

}
