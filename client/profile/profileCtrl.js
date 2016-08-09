app.controller('profileCtrl', profileCtrl);

function profileCtrl(profile, notMobile, user, $scope, Companion) {
  console.log(profile);

  $scope.currentUser = user;
  $scope.profile = profile;
  $scope.trip = profile.trip[0];
  $scope.notMobile = notMobile;


  if (user && user.companions.indexOf(profile._id) === -1) {
    $scope.friendRequest = true;
  } else {
    $scope.friendRequest = false;
  }

  $scope.sendRequest = () => {
    Companion.sendRequest(profile._id)
      .then(res => {
        console.log(res);
      })
  }

}
