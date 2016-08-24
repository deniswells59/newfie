app.controller('profileCtrl', profileCtrl);

function profileCtrl(profile, user, $scope, Companion) {
  $scope.currentUser = user;
  $scope.profile = profile;
  $scope.trip = profile.trip[0];
  $scope.friendRequest = false;

  if (user) {
    if(profile.requests.indexOf(user._id) < 0 && user.companions.indexOf(profile._id) < 0) {
      $scope.friendRequest = true;
    }
  }

  $scope.sendRequest = () => {
    Companion.sendRequest(profile._id)
      .then(res => {
        $scope.friendRequest = false;
      });
  }

}
