app.controller('dashCtrl', dashCtrl);

function dashCtrl($state, $scope, user, $location, User, Location) {

  if (!user) {
    $state.go('home');
  }
  if (!user.registered) {
    $state.go('registerNav.registerLang');
  }

  $scope.user = user;
  $scope.loading = false;
  $scope.pending = false;
  $scope.city = 'Click on the map to add new places'
  $scope.$watch('selectedTab', function(current, old) {
    switch(current) {
      case 0:
        $location.url("/dash/profile");
        break;
      case 1:
        $location.url("/dash/guide");
        break;
      case 2:
        $location.url("/dash/places");
        break;
    }
  })

  $scope.getLocation = function(event) {
    if(!$scope.pending) {
      $scope.loading = true;
      let lat = event.latLng.lat();
      let lng = event.latLng.lng();
      $scope.user.places.push({lat: lat, lng: lng})
      Location.getCity({lat: lat, lng: lng})
        .then(res => {
          $scope.pending = true;
          $scope.loading = false;
          $scope.city = res;
        })
    }
  }

  $scope.cancelPlace = function() {
    $scope.user.places.pop();
    $scope.pending = false;
    $scope.city = 'Click on the map to add new places';
  }
}
